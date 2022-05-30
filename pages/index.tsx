import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import { Fragment, useState } from 'react'


const Home = ({
  
}) => {
  const [test,setTest]:[any,any] = useState(0);
  return (
    <Fragment>
      <Head>
        <title>"EcoTrans Website"</title>
      </Head>

      <h1>EcoTrans Landing Page</h1>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  console.log("Test Static")
}


export default Home;