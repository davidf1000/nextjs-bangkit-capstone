import { Fragment, useEffect, useState } from "react";
import NavBar from "../components/landing/Navbar";
import Heads from "../components/Heads";
import Image from "next/image";
import { useRouter } from "next/router";
import cookieCutter from "cookie-cutter";
import axios from "axios";
import Footer from "../components/Footer";
// Login
// CSR - React
interface ApiResponse {
  status: number;
  data: {
    error: Boolean;
    msg?: String;
    status?: String;
  };
}
const Register = (): JSX.Element => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    userName: "",
    password: "",
  });
  const [alert, setAlert] = useState("");
  const { email, companyName, userName, password } = formData;
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log("Register UseEffect");
  });
  const alertClose = (
    e: React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<SVGSVGElement, MouseEvent>
  ): void => {
    setAlert("");
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
    const body = {
      email,
      partnerName: companyName,
      username: userName,
      password,
    };
    try {
      const res: ApiResponse = await axios.post("api/register", body);
      console.log(res);
      if (res.status !== 201) {
        console.log("Error Register");
        setAlert((res.data.msg as any) || (res.data.status as any));
        setLoading(false);
      } else {
        setLoading(false);
        console.log("Success ! redirecting to login ...");
        // delete cookie
        cookieCutter.set("token", "", { expires: new Date(0) });
        cookieCutter.set("userId", "", { expires: new Date(0) });
        router.push("/login");
      }
    } catch (err: any) {
      console.log("ERROR");

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
      <div className="flex flex-col h-screen justify-between">
        <NavBar login={true} />
        <div className="flex rounded bg-white mx-auto my-12 w-5/6 font-sans">
          <div className="container rounded bg-slate-500 rounded w-0 md:w-full">
            <img
              className="object-cover rounded h-full"
              src="/images/register.jpg"
            />
          </div>
          <div className="container rounded-xl bg-white my-12">
            <div className="flex flex-col text-center justify-between">
              <div>
                <h1 className="text-5xl font-sans mt-10 mb-8">
                  Register your account
                </h1>
              </div>
              <div className="my-1">
                <form className="bg-white rounded px-8 pt-6 pb-2 mb-1">
                  <div className="mb-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className='shadow appearance-none border rounded w-1/2" py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      id="email"
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="Company Name"
                    >
                      Company Name
                    </label>
                    <input
                      className='shadow appearance-none border rounded w-1/2" py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      id="company"
                      type="text"
                      placeholder="Company Name"
                      name="companyName"
                      value={companyName}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="mb-2">
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
                      name="userName"
                      value={userName}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-0"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className='shadow appearance-none border rounded w-1/2" py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
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
                    <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <button
                    onClick={(e) => userSubmit(e)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
                    type="button"
                  >
                    Register
                  </button>
                )}
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

export default Register;
