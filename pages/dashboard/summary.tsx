import { Fragment } from "react";
import axios from "axios";
import StatusCard from "../../components/dashboard/summary/StatusCard";
import ChartLine from "../../components/dashboard/summary/ChartLine";
import Sidebar from "../../components/dashboard/Sidebar";
import Footer from "../../components/Footer";
import cookies from "next-cookies";
import Heads from "../../components/Heads";
import ChartDoughnut from "../../components/dashboard/summary/ChartDoughnut";
import {
  CookieList,
  GetPurchasesResponse,
  GetVouchersResponse,
  LoadResponse,
  SummaryData,
  SummaryProps,
} from "./dashboard.types";
import createRandomSummaryData from "../../actions/createRandomSummary";
import { GetServerSideProps } from "next";
import calculateSummary from "../../actions/calculateSummary";

// Dashboard - Summary
// SSR

const Summary = ({ companyName, summaryData }: SummaryProps): JSX.Element => {
  return (
    <Fragment>
      <Heads />
      <Sidebar location={"Summary"} companyName={companyName} />
      <div className="md:ml-52 flex flex-col justify-between h-screen">
        <div className="flex flex-col">
          <div className="flex flex-wrap justify-center py-3 item-center content-center">
            <div className="max-w-sm w-full sm:w-1/2 xl:w-1/4 p-2">
              <StatusCard
                value={summaryData.transactionsMade}
                desc={"Transactions"}
                icon={"cash"}
              />
            </div>
            <div className="max-w-sm w-full sm:w-1/2 xl:w-1/4 p-2">
              <StatusCard
                value={summaryData.voucherSold}
                desc={"Voucher sold"}
                icon={"voucher"}
              />
            </div>
            <div className="max-w-sm w-full sm:w-1/2 xl:w-1/4 p-2">
              <StatusCard
                value={summaryData.currentStock}
                desc={"Current stock"}
                icon={"stock"}
              />
            </div>
            <div className="max-w-sm w-full sm:w-1/2 xl:w-1/4 p-2">
              <StatusCard
                value={summaryData.pointsEarned}
                desc={"Points earned"}
                icon={"points"}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-wrap justify-center md:justify-start item-center p-5">
              <div className="w-full lg:w-1/2 px-2 py-2">
                <ChartDoughnut data={summaryData.dataDoughnut} />
              </div>
              <div className="w-full lg:w-1/2 px-2 py-2">
                <ChartLine data={summaryData.dataLine} />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Fragment>
  );
};

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Cookies
  const allCookies: CookieList = cookies(ctx,{path:'/'});
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
  // Fetch Partner by ID
  console.log(allCookies.demo);
  
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

  // Fetch Data Summary
  // Check cookie mode if true createRandom, if not use api
  const axiosHeader = {
    headers: { Authorization: `Bearer ${allCookies.token}` },
  };
  let summaryData: SummmaryData;
  if (allCookies.demo === true) {
    summaryData = createRandomSummaryData();   
  } else {
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
    summaryData = calculateSummary(
      respGetPurchases.data.purchases,
      respGetVouchers.data.vouchers
    );     
  }

  return { props: { companyName, summaryData } };
};

export default Summary;
