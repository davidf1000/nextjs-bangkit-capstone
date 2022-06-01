import { Fragment } from 'react'
import Head from 'next/head'
import React from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';


// Login
// CSR - React


const Login = ({ user }): JSX => {
  return (
    <Fragment>

      <Head>
        <title>"EcoTrans Website"</title>
      </Head>
      <style jsx global>{`
  body {
    background: #86efac};
  }
`}</style>
      <NavBar login={true} />
      <div className="container bg-white mx-auto my-10 w-3/4 h-96" >
        
        <h1 className="font-semibold text-5xl">Welcome to Login Page</h1>

      </div>
      <Footer />
    </Fragment>
  );
}

export default Login;