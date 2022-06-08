import { Fragment } from "react";
import Head from "next/head";
import axios from "axios";
import StatusCard from "../../components/dashboard/StatusCard";
import ChartLine from "../../components/dashboard/ChartLine";
import ChartBar from "../../components/dashboard/ChartBar";
import Sidebar from "../../components/dashboard/Sidebar";
import Footer from "../../components/Footer";

interface Todos {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Dashboard - Summary
// SSR

const Summary = ({ token }): JSX.Element => {
  return (
    <Fragment>
      <Head>
        <title>EcoTrans Website</title>
      </Head>
      <Sidebar location={"Summary"} />
      <div className="md:ml-64">
        <div className="flex flex-col h-screen">
        <div className="flex flex-row justify-between p-5">
          {/* <h1 className="text-2xl text-gray-500">Content Here</h1> */}
          <div className='w-1/2 m-2'>
          <ChartBar />
          </div>
          <div className='w-1/2 m-2'>
          <ChartLine />
          </div>
        </div>
        <div className="flex flex-rowjustify-between p-5">
          {/* <h1 className="text-2xl text-gray-500">Content Here</h1> */}
          <div className='w-1/4 m-2'>
          <StatusCard
                            color="pink"
                            icon="trending_up"
                            title="Traffic"
                            amount="350,897"
                            percentage="3.48"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />            
          </div>
          <div className='w-1/4 m-2'>
          <StatusCard
                            color="pink"
                            icon="trending_up"
                            title="Traffic"
                            amount="350,897"
                            percentage="3.48"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />            
          </div>
          <div className='w-1/4 m-2'>
          <StatusCard
                            color="pink"
                            icon="trending_up"
                            title="Traffic"
                            amount="350,897"
                            percentage="3.48"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />            
          </div>

        </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

// This gets called on every request
export async function getServerSideProps({ req, res }) {
  // Fetch data from external API
  const res1 = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  // Cookies
  const resp = await axios.get(`http://localhost:3000/api/load`, {
    headers: {
      Cookie: req.headers.cookie,
    },
  });
  // Pass data to the page via props
  return { props: { token: req.cookies.token } };
}
export default Summary;
