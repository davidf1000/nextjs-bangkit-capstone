import { Fragment } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Footer from "../../components/Footer";
import LogTable from "../../components/dashboard/logs/LogTable";
import cookies from "next-cookies";
import axios from "axios";
import Heads from "../../components/Heads";
import { LoadResponse, LogsProps, Transaction } from "./dashboard.types";
import createRandomTransactions from "../../actions/fetchTransactions";
import { GetServerSideProps } from "next";
import calculateLogs from "../../actions/calculateLogs";

// Dashboard - Logs
// SSR
const Logs = ({ companyName, transactions }: LogsProps): JSX.Element => {
  return (
    <Fragment>
      <Heads />
      <Sidebar location={"logs"} companyName={companyName} />
      <div className="md:ml-52">
        <div className="flex flex-col h-screen justify-between">
          <LogTable transactions={transactions} />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Cookies
  const allCookies: Record<string, string> = cookies(ctx);
  // If no token or no user, redirect
  if (!allCookies.token || !allCookies.userId) {
    console.log("cookies missing, redirecting...");
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
  const axiosHeader = {
    headers: { Authorization: `Bearer ${allCookies.token}` },
  };
  let companyName: string;
  if (allCookies.demo === true) {
    companyName = "Demo";
  } else {
    try {
      const loadResponse: LoadResponse = await axios.get(
        `${process.env.BASEPATH}/api/load/${allCookies.userId}`,
        {
          headers: {
            Cookie: `token=${allCookies.token}; userId:${allCookies.userId}`,
          },
        }
      );
      companyName = loadResponse.data.companyName;
    } catch (e) {
      console.log(e.message);
      companyName = "";
    }
  }
  let transactions:Transaction[]  = [] 
  if (allCookies.demo === true)
  {
    transactions = createRandomTransactions();
  }
  else{
    // Get vouchers company
    const respGetVouchers: GetVouchersResponse = await axios.get(
      `https://backend-capstone-h3lwczj22a-et.a.run.app/vouchers?company=${companyName}`,
      axiosHeader
    );
    // console.log(respGetVouchers.data.vouchers);
    // get purchases
    const respGetPurchases: GetPurchasesResponse = await axios.get(
      `https://backend-capstone-h3lwczj22a-et.a.run.app/purchases`,
      axiosHeader
    );
    // console.log(respGetPurchases.data.purchases);
    transactions = calculateLogs(
      respGetPurchases.data.purchases,
      respGetVouchers.data.vouchers
    );   
  }
  // Pass data to the page via props
  return { props: { companyName, transactions } };
};

export default Logs;
