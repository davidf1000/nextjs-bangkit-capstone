import { Fragment } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Sidebar from '../../components/dashboard/Sidebar';
import Footer from '../../components/Footer';
import LogTable from '../../components/dashboard/LogTable';
import cookies from 'next-cookies';


interface Todos {
    userId: number;
    id: number;
    title : string;
    body : string;
}

// Dashboard - Logs
// SSR

const Logs = ({data}:{data:Todos[]}): JSX.Element => {
    return (
        <Fragment>
        <Head>
          <title>EcoTrans Website</title>
        </Head>
        <Sidebar location={"logs"} />
        <div className="md:ml-64">
          <div className="flex flex-col h-screen justify-between">
            <LogTable />
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

  // Pass data to the page via props
  return { props: {  } };
}
export default Logs;