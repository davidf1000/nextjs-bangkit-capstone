import Card from "@material-tailwind/react/Card";
import CardRow from "@material-tailwind/react/CardRow";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardStatus from "@material-tailwind/react/CardStatus";
import CardStatusFooter from "@material-tailwind/react/CardStatusFooter";
import Icon from "@material-tailwind/react/Icon";

export default function StatusCard({
}) {
  return (
    <div className="flex flex-row items-center content-center justify-start bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 px-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-green-500 mx-4"
        style={{width: "100px"}}
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
      <div className="flex flex-col justify-between py-2 px-2 leading-normal text-center">
        <h1 className="mb-1 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          15
        </h1>
        <h2 className="mb-2 font-normal text-xl text-center text-gray-700 dark:text-gray-400">
          Transactions
        </h2>
      </div>
    </div>
  );
}
