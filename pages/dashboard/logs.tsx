import { Fragment } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Footer from "../../components/Footer";
import LogTable from "../../components/dashboard/logs/LogTable";
import cookies from "next-cookies";
import axios from "axios";
import Heads from "../../components/Heads";
import { LoadResponse, LogsProps, Transaction } from "./dashboard.types";
import createRandomTransactions from "../../actions/fetchTransactions";

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

export async function getServerSideProps(ctx) {
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
  let companyName: string;
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
  const transactions: Transaction[] = createRandomTransactions();
  // Pass data to the page via props
  return { props: { companyName, transactions } };
}

export default Logs;
