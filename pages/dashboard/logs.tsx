import { Fragment } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Footer from "../../components/Footer";
import LogTable from "../../components/dashboard/table/LogTable";
import cookies from "next-cookies";
import axios from "axios";
import Heads from "../../components/Heads";
import { GetPurchasesResponse, GetVouchersResponse, LoadResponse, LogsProps, Transaction } from "../../components/pagetypes/dashboard.types";
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
  const axiosHeader = {
    headers: { Authorization: `Bearer ${allCookies.token}` },
  };
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
  let companyName: string;
  let transactions: Transaction[] = [];
  if (allCookies.demo === "true") {
    companyName = "Demo";
    transactions = createRandomTransactions();
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
    try {
      // Get vouchers company
      const respGetVouchers: GetVouchersResponse = await axios.get(
        `https://backend-capstone-h3lwczj22a-et.a.run.app/vouchers?company=${companyName}`,
        axiosHeader
      );
      // get purchases
      const respGetPurchases: GetPurchasesResponse = await axios.get(
        `https://backend-capstone-h3lwczj22a-et.a.run.app/purchases`,
        axiosHeader
      );
      transactions = calculateLogs(
        respGetVouchers.data.vouchers,
        respGetPurchases.data.purchases
      );
    } catch (e) {
      transactions = [];
    }
  }

  // Pass data to the page via props
  return { props: { companyName, transactions } };
};

export default Logs;
