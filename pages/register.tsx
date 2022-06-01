import { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import NavBar from '../components/Navbar';


// Login
// CSR - React


const Register = (): JSX => {
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
          <div className="container mx-auto w-1/2" >
            
          </div>
    
        </Fragment>
      );
}

export default Register;