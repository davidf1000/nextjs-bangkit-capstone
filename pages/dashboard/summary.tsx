import { Fragment } from "react";
import axios from "axios";
import StatusCard from "../../components/dashboard/summary/StatusCard";
import ChartLine from "../../components/dashboard/summary/ChartLine";
import Sidebar from "../../components/dashboard/Sidebar";
import Footer from "../../components/Footer";
import cookies from "next-cookies";
import Heads from "../../components/Heads";
import ChartDoughnut from "../../components/dashboard/summary/ChartDoughnut";
import { SummaryData } from "./dashboard.types";

interface SummaryProps {
  companyName: string;
  summaryData : SummaryData;
  dataDoughnut : any
}

// Dashboard - Summary
// SSR

const Summary = ({ companyName, summaryData }: SummaryProps): JSX.Element => {
  return (
    <Fragment>
      <Heads />
      <Sidebar location={"Summary"} companyName={companyName} />
      <div className="md:ml-52 flex flex-col justify-between h-screen">
        <div className="flex flex-col">
          <div className="flex flex-wrap justify-center p-5 item-center content-center">
            {/* <h1 className="text-2xl text-gray-500">Content Here</h1> */}
            <div className="max-w-sm w-full sm:w-1/2 xl:w-1/4 p-2 ">
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
              {/* <h1 className="text-2xl text-gray-500">Content Here</h1> */}
              <div className="w-full lg:w-1/2 px-2">
                <ChartDoughnut data={summaryData.dataDoughnut}/>
              </div>
              <div className="w-full lg:w-1/2 px-2">
                <ChartLine data={summaryData.dataLine}/>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Fragment>
  );
};

interface Cookies {
  token: string;
  userId: string;
}


// This gets called on every request
export async function getServerSideProps(ctx) {
  // Cookies
  const allCookies: Record <string,string> = cookies(ctx);
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
  // Fetch data from external API
  // 1. Fetch Partner by ID
  let companyName;
  try{
    const loadResponse:LoadResponse = await axios.get(`${process.env.BASEPATH}/api/load/${allCookies.userId}`,{
      headers:{
        Cookie: `token=${allCookies.token}; userId:${allCookies.userId}`
      }
    });
    companyName = loadResponse.data.companyName
    
  }
  catch(e){
    console.log(e.message);
    companyName = ''
  }

  // Fetch Data Summary
  const summaryData = {
    transactionsMade : Math.floor(Math.random() * 10),
    voucherSold : Math.floor(Math.random() * 10),
    currentStock : Math.floor(Math.random() * 10),
    pointsEarned : Math.floor(Math.random() * 1000),
    dataDoughnut : {
      labels: [
          'Free ongkir 10 ribu ',
          'Cashback 15%',
          'Diskon belanja 5%'
      ],
      datasets: [
          {
              data: [5, 2, 3],
              backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)'
                ],
                label: 'Voucher Sales Comparison',
                hoverOffset: 4
          }

      ],
  },
  dataLine : {
    labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June'
    ],
    datasets: [
        {
            label: new Date().getFullYear(),
            backgroundColor: '#03a9f4',
            borderColor: '#03a9f4',
            data: [5, 3, 5, 2, 2, 3],
            fill: false,
        }
    ],
  }
  }


  return { props: {companyName,summaryData} };
  // Pass data to the page via props
}
export default Summary;


interface LoadResponse{
  status:number;
  data: {
    companyName: string;
  }
}