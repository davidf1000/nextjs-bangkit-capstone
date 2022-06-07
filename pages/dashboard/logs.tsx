import { Fragment } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Sidebar from '../../components/dashboard/Sidebar';
import Footer from '../../components/Footer';


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
            <h1 className="text-2xl text-gray-500">Content Here</h1>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
export default Logs;