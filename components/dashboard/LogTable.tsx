import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import { Fragment } from 'react';
interface Transaction {
    Date: Date;
    voucherName : string;
    category : string;
    quantity : number;
    totalPrice : number;
}
const LogTable = ({transactions}:{transactions: Transaction[]}): JSX.Element => {
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
                                {transactions.map((item,idx)=> <tr key={idx}>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {idx+1}
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

                                
                                )}

                                {/* <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Dakota Rice
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    $36,738
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Niger
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Niger
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Niger
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}

export default LogTable;