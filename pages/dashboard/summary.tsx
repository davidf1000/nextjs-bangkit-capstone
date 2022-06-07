import { Fragment } from "react";
import Head from "next/head";
import Cookies from "cookies";
import { NextApiResponse } from "next";
import axios from "axios";
import StatusCard from "../../components/dashboard/StatusCard";
import ChartLine from "../../components/dashboard/ChartLine";
import ChartBar from "../../components/dashboard/ChartBar";
import PageVisitsCard from "../../components/dashboard/PageVisitsCard";
import TrafficCard from "../../components/dashboard/TrafficCard";
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

const Summary = ({ token }): JSX => {
  return (
    <Fragment>
      <Head>
        <title>EcoTrans Website</title>
      </Head>
      <Sidebar location={"Summary"} />
      <div className="md:ml-64">
        <div className="flex flex-col h-screen justify-between">
          <h1 className="text-2xl text-gray-500">Content Here</h1>
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
