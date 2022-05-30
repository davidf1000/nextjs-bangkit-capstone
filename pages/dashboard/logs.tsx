import { Fragment } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'


interface Todos {
    userId: number;
    id: number;
    title : string;
    body : string;
}

// Dashboard - Logs
// SSR

const Logs = ({data}:{data:Todos[]}): JSX => {
    return (
        <Fragment>
            <Head>
                <title>"EcoTrans Website"</title>
            </Head>
            <h1 className="text-5xl text-center font-bold underline">Logs Page</h1>
            {data.map((item)=><li>{item.userId}</li>)}
            {/* <h5>{data.toString()}</h5> */}
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