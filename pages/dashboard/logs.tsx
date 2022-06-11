import { Fragment } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Sidebar from '../../components/dashboard/Sidebar';
import Footer from '../../components/Footer';
import LogTable from '../../components/dashboard/logs/LogTable';
import cookies from 'next-cookies';
import axios from 'axios';
import createTransactions from '../../actions/fetchTransactions';
import Heads from '../../components/Heads';


interface LogsProps {
  companyName: string;
  transactions: Transactions;
}

// Dashboard - Logs
// SSR

const Logs = ({companyName, transactions}:LogsProps): JSX.Element => {
    return (
        <Fragment>
        <Heads />
        <Sidebar location={"logs"} companyName={companyName}/>
        <div className="md:ml-52">
          <div className="flex flex-col h-screen justify-between">
            {/* {JSON.stringify(transactions)} */}
            <LogTable transactions={transactions}/>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
}

interface Cookies{
  "token":string;
  "userId":string;
}
// This gets called on every request
export async function getServerSideProps(ctx) {
  // Cookies
  const allCookies: Cookies = cookies(ctx);
  // If no token or no user, redirect 
  if (!allCookies.token || !allCookies.userId ){
    console.log("cookies missing, redirecting...");
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props:{},
    };
  }
  // Fetch data from external API
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
  const transactions = createTransactions()
  // Pass data to the page via props
  return { props: { companyName, transactions} };
}

export default Logs;

interface LoadResponse{
  status:number;
  data: {
    companyName: string;
  }
}
interface Transaction {
  Date: Date;
  voucherName : string;
  category : string;
  quantity : number;
  totalPrice : number;
}