import { Fragment } from 'react'
import React from 'react';
import axios from 'axios';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Heads from '../components/Heads';
import Image from 'next/image'

// Login
// CSR - React

const Login = ({ user }): JSX => {
  return (
    <Fragment>
      <Heads />
      <style jsx global>{`
  body {
    background: #86efac};
  }
`}</style>
      <NavBar login={true} />
      <div className="flex rounded bg-white mx-auto my-12 w-3/4" >
        <div className="container bg-slate-500 rounded">
      <Image
      layout='responsive'
      src="/images/login.jpg"
      alt="Ecotrans Login Page"
      width={500}
      height={500}
    />
      </div>
    <div className="container bg-white">
      <div className="flex flex-col text-center justify-between">
        <div>
          <h1 className='text-5xl font-sans mt-16 mb-10'>Welcome</h1>
        </div>
        <div className='my-5'>
        <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className='shadow appearance-none border rounded w-1/2" py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="username" type="text" placeholder="Username" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className='shadow appearance-none border rounded w-1/2" py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id="password" type="password" placeholder="******************" />
    </div>
    <div className="flex items-center justify-between">
    </div>
  </form>          
        </div>

        <div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Login
      </button>
        <h3 className='font-sans my-6'>Haven't created your account ? <a className='font-sans font-bold 
        no-underline hover:underline text-blue-600' href="/register">Register here</a></h3>
        </div>
      </div>
    </div>
      </div>

      {/* <Footer /> */}
    </Fragment>
  );
}

export default Login;