import { StatusCardProps } from "./summary.types";

const StatusCard = ({ value, desc, icon }: StatusCardProps): JSX.Element => {
  return (
    <div className="flex flex-row items-center content-center justify-start bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 px-1">
      {iconMaker(icon)}
      <div className="flex flex-col justify-between py-2 px-2 leading-normal text-center">
        <h1 className="mb-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {value}
        </h1>
        <h2 className="mb-2 font-normal text-md text-center text-gray-700 dark:text-gray-400">
          {desc}
        </h2>
      </div>
    </div>
  );
};

const width = { width: "80px" };
const iconMaker = (icon: string): JSX.Element => {
  if (icon === "cash") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-green-500 mx-2"
        style={width}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    );
  } else if (icon === "voucher") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-red-500 mx-2"
        style={width}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
        />
      </svg>
    );
  } else if (icon === "stock") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-amber-500 mx-2"
        style={width}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    );
  } else {
    //points
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-500 mx-2"
        style={width}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    );
  }
};

export default StatusCard;
