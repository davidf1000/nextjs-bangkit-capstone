import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Fragment } from 'react'
import Link from 'next/link'
import Landing from '../components/Landing';
// import '../asset/css/global.css'
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
      <Landing />
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