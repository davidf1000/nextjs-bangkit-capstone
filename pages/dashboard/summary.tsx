import { Fragment } from 'react'
import Head from 'next/head'
import Cookies from 'cookies'
import { NextApiResponse } from 'next'

interface Todos {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Dashboard - Summary
// SSR

const Summary = ({token}): JSX => {
    return (
        <Fragment>
            <Head>
                <title>"EcoTrans Website"</title>
            </Head>
            <h1 className="text-5xl text-center font-bold underline">Summary Page</h1>
            <h1 className="text-4 text-center font-bold underline">{token.toString()}</h1>
            
            {/* {data.map((item) => <li>{item.userId}</li>)} */}
            {/* <h5>{data.toString()}</h5> */}
        </Fragment>
    );
}

// This gets called on every request
export async function getServerSideProps({ req, res }) {
    // Fetch data from external API
    const res1 = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    // Cookies   
    const resp = await fetch(`http://localhost:3000/api/load`)
    // Pass data to the page via props
    return { props: {token:req.cookies.token} }
}
export default Summary;