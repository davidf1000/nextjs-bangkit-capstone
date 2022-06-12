import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import NavbarInput from "@material-tailwind/react/NavbarInput";
import Image from "@material-tailwind/react/Image";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import ProfilePicture from "../assets/img/team-1-800x800.jpg";
import Link from "next/link";
import { useRouter } from "next/router";
import cookieCutter from "cookie-cutter";

const AdminNavbar = ({
  showSidebar,
  setShowSidebar,
  location,
  companyName,
}): JSX.Element => {
  const router = useRouter();
  const logout = () => {
    cookieCutter.set("token", "", { expires: new Date(0) });
    cookieCutter.set("userId", "", { expires: new Date(0) });
    cookieCutter.set("demo", "", { expires: new Date(0) });
    router.push("/");
  };
  return (
    <nav className="bg-green-500 md:ml-52 py-6 px-3">
      <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
        <div className="md:hidden">
          <Button
            color="transparent"
            buttonType="link"
            size="lg"
            iconOnly
            rounded
            ripple="light"
            onClick={() => setShowSidebar("left-0")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
          <div
            className={`absolute top-2 md:hidden ${
              showSidebar === "left-0" ? "left-52" : "-left-52"
            } z-50 transition-all duration-300`}
          >
            <Button
              color="transparent"
              buttonType="link"
              size="lg"
              iconOnly
              rounded
              ripple="light"
              onClick={() => setShowSidebar("-left-64")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <h4 className="uppercase text-white text-xl sm:text-2xl tracking-wider mt-1 ml-4">
            {location}
          </h4>

          <div className="flex justify-end items-center w-full mr-4">
            <h4 className="text-white text-md tracking-wider mt-1 invisible sm:visible">
              Welcome, {companyName}
            </h4>
            <h2 className="text-white text-xl tracking-wider mt-1 mx-2 invisible sm:visible">
              |
            </h2>
            <Link href="/">
              <a className="text-white text-md tracking-wider mt-1">Home</a>
            </Link>
            <h2 className="text-white text-xl tracking-wider mt-1 mx-2">|</h2>
            <a
              onClick={logout}
              className="text-white text-md cursor-pointer tracking-wider mt-1"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
