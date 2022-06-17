import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import { Transaction } from "../../pagetypes/dashboard.types";

interface LogTableProps {
  transactions: Transaction[];
}
const LogTable = ({ transactions }: LogTableProps): JSX.Element => {
  return (
    <Card>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-green-600 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                  No
                </th>
                <th className="px-2 text-green-600 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                  Date
                </th>
                <th className="px-2 text-green-600 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                  Voucher Name
                </th>
                <th className="px-2 text-green-600 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                  Category
                </th>
                <th className="px-2 text-green-600 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                  Quantity
                </th>
                <th className="px-2 text-green-600 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-bold text-left">
                  Total Price
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((item, idx) => (
                <tr key={idx}>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {idx + 1}
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {item.Date}
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {item.voucherName}
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {item.category}
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {item.quantity}
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {item.totalPrice}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
};

export default LogTable;
