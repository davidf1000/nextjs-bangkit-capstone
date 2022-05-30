import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Fragment } from 'react'

// Root Page 
// SSG 

interface Props {
  value: string;
}

const Home = ({
  value
}:Props) => {
  return (
    <Fragment>
      <Head>
        <title>"EcoTrans Website"</title>
      </Head>

      <h1 className="text-5xl text-center font-bold underline">EcoTrans Landing Page</h1>
      <h2>{value}</h2>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  console.log("Test Static")
  return {
    props:
    {value:"test"}
  }
}


export default Home;