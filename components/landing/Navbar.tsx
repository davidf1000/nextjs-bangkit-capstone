import Link from "next/link";
import { Fragment, useState } from "react";
import { NavBarProps } from "./landing.types";

const NavBar = ({ login }: NavBarProps): JSX.Element => {
  const [dropdown, setDropdown] = useState<string>("hidden");
  const toggleDropdown = () => {
    if (dropdown === "visible") {
      setDropdown("hidden");
    } else {
      setDropdown("visible");
    }
  };
  return (
    <Fragment>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container font-sans flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
            <a href="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                EcoTrans
              </span>
            </a>
          </Link>
          {!login && (
            <Fragment>
              <button
                data-collapse-toggle="mobile-menu"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => {
                  toggleDropdown();
                }}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </Fragment>
          )}
          {login ? (
            <div className="visible">
              <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <Link href="/">
                    <a className="block pr-4 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      Home
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <a
                    href="#home"
                    className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#aboutus"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#ourteam"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Our Teams
                  </a>
                </li>
                <li>
                  <a
                    href="#showcase"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Showcase
                  </a>
                </li>
                <li>
                  <Link href="/login">
                    <a className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                      Login
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        <section className={`md:hidden ${dropdown}`}>
          <div className="flex-grow border-t border-gray-400 w-full my-2"></div>
          <div className={`flex justify-start duration-100 ml-4`}>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a
                  href="#aboutus"
                  onClick={() => {
                    toggleDropdown();
                  }}
                >
                  About Us
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a
                  href="#ourteam"
                  onClick={() => {
                    toggleDropdown();
                  }}
                >
                  Our teams
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a
                  href="#showcase"
                  onClick={() => {
                    toggleDropdown();
                  }}
                >
                  Showcase
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a
                  href="/login"
                  onClick={() => {
                    toggleDropdown();
                  }}
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    </Fragment>
  );
};

export default NavBar;
