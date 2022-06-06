import { Fragment, useEffect, useState } from 'react'
import NavBar from '../components/Navbar';
import Heads from '../components/Heads';
import Image from 'next/image';
import { useRouter } from 'next/router'
import cookieCutter from 'cookie-cutter'


// Login
// CSR - React


const Register = (): JSX => {
  const router = useRouter()
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log("test");
    // check cookies
    // if have token cookie, login, check expiration date
    // if expired, logout
    // else, get userID from cookie, then, redirect to dashboard
    console.log(cookieCutter.get('token'));
    console.log(cookieCutter.get('userId'));
    
  });  
  const userSubmit = async (e: React.ChangeEvent<HTMLInputElement>):void =>{
    e.preventDefault()
    const body = {
      fullName : "fullname",
      email : "email",
      companyName : "companyName",
      username : "user",
      password : "pass",
    }
    interface Data {
      error: Boolean;
      msg: String;
      loginResult: {
        token: String;
        userId: String;
      }
    }
    interface Response{
      status: Number;
      statusText: String;
      data: Data;
    }
    try {
      const res:Response = await axios.post("api/login",body);
      console.log(res);
      if (res.status !== 201) {
        console.log("Error Login");
      }
      else{
        console.log("Success ! redirecting to login ...");
        router.push('/login')
        // Set cookie for token and userID
      }
    } catch (err) {
      console.log(err)
    }
  }  
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
        <div className="container rounded bg-slate-500 rounded">
      <Image
      layout='responsive'
      src="/images/register.jpg"
      alt="Ecotrans Login Page"
      width={500}
      height={500}
    />
      </div>
    <div className="container rounded-xl bg-white">
      <div className="flex flex-col text-center justify-between">
        <div>
          <h1 className='text-5xl font-sans mt-10 mb-8'>Register your account</h1>
        </div>
        <div className='my-1'>
        <form className="bg-white rounded px-8 pt-6 pb-8 mb-2">
        <div className="mb-2">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="fullname">
        Fullname
      </label>
      <input className='shadow appearance-none border rounded w-1/2" py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="fullname" type="text" placeholder="Fullname" />
    </div>
    <div className="mb-2">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label>
      <input className='shadow appearance-none border rounded w-1/2" py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="email" type="text" placeholder="Email" />
    </div>
    <div className="mb-2">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="Company Name">
        Company Name
      </label>
      <input className='shadow appearance-none border rounded w-1/2" py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="company" type="text" placeholder="Company Name" />
    </div>  
    <div className="mb-2">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className='shadow appearance-none border rounded w-1/2" py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="username" type="text" placeholder="Username" />
    </div>      
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-0" for="password">
        Password
      </label>
      <input className='shadow appearance-none border rounded w-1/2" py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id="password" type="password" placeholder="******************" />
    </div>
    <div className="flex items-center justify-between">
    </div>
  </form>          
        </div>

        <div>
    <button onClick={userSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Register
      </button>
        </div>
      </div>
    </div>
      </div>
        </Fragment>
      );
}

export default Register;