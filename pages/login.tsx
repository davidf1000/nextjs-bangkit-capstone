import { Fragment, useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import NavBar from "../components/landing/Navbar";
import Footer from "../components/Footer";
import Heads from "../components/Heads";
import { useRouter } from "next/router";
import cookieCutter from "cookie-cutter";
import { LoginApiResponse, LoginFormData } from "./user.types";

// Login
// CSR - React
const Login = (): JSX.Element => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginFormData>({
    username: "demo",
    password: "Demo123",
  });
  const [alert, setAlert] = useState<null | string>(null);
  const { username, password } = formData;
  useEffect(() => {
    // check cookies
    const token = cookieCutter.get("token");
    const userId = cookieCutter.get("userId");
    if (token && userId) {
      router.push("/dashboard/summary");
    }
  });

  const alertClose = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<SVGSVGElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setAlert(null);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const userSubmit = async (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setLoading(true);
    const body: LoginFormData = {
      username,
      password,
    };
    try {
      const res: LoginApiResponse = await axios.post("api/login", body);
      if (res.status !== 200) {
        console.log("Error Login");
        setAlert(res.data.msg);
        setLoading(false);
      } else {
        const opt = {path: '/'}
        // Set cookie for token and userID
        cookieCutter.set("token", res.data.token,opt);
        cookieCutter.set("userId", res.data.partnerId,opt);
        // If demo account, set demo to true
        cookieCutter.set(
          "demo",
          body.username === "demo" && body.password === "Demo123",
          opt
        );
        console.log("OK !");
        e.preventDefault();
        router.push("/dashboard/summary");
      }
    } catch (err: any) {
      console.log(err);
      setAlert(err.message);
      setLoading(false);
    }
  };
  return (
    <Fragment>
      <Heads />
      <style jsx global>{`
  body {
    background: #86efac};
  }
`}</style>
      <div className="flex flex-col h-screen justify-between font-sans">
        <NavBar login={true} />
        <div className="flex rounded bg-white mx-auto my-12 w-3/4 xl:w-1/2 max-h-[750px] justify-center">
          <div className="container bg-slate-500 w-1/2 rounded w-0 md:w-1/2">
            <img
              className="object-cover rounded h-full w-full"
              src="/images/login.jpg"
            />
          </div>
          <div className="container rounded bg-white w-1/2 content-center items-center">
            <div className="flex flex-col text-center justify-between my-16">
              <div>
                <h1 className="text-5xl font-sans mb-16">Welcome</h1>
              </div>
              <div className="my-5">
                <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      className='shadow appearance-none border rounded w-1/2" py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      id="username"
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={username}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className='shadow appearance-none border rounded w-1/2" py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                      id="password"
                      type="password"
                      placeholder="******************"
                      name="password"
                      value={password}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="flex items-center justify-between"></div>
                </form>
              </div>

              <div>
                {loading ? (
                  <div className="flex items-center justify-center ">
                    <div className="w-10 h-10 border-b-2 border-gray-900 rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <button
                    onClick={(e) => {
                      userSubmit(e);
                    }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Login
                  </button>
                )}

                <h3 className="font-sans my-6 mx-2">
                  Haven't created your account ?{" "}
                  <a
                    className="font-sans font-bold 
        no-underline hover:underline text-blue-600"
                    href="/register"
                  >
                    Register here
                  </a>
                </h3>
              </div>
              {alert && (
                <div
                  className="bg-red-100 border mx-4 border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <span className="block sm:inline">{alert}</span>
                  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg
                      onClick={(e) => alertClose(e)}
                      className="fill-current h-6 w-6 text-red-500"
                      role="button"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <title>Close</title>
                      <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                    </svg>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Login;
