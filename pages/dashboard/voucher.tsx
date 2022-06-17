import { Fragment, useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Footer from "../../components/Footer";
import Modal from "../../components/dashboard/voucher/Modal";
import VoucherCard from "../../components/dashboard/voucher/VoucherCard";
import cookies from "next-cookies";
import { useRouter } from "next/router";
import axios from "axios";
import Heads from "../../components/Heads";
import {
  CookieList,
  DeleteVoucherResponse,
  LoadResponse,
  Voucher,
  VoucherProps,
  VouchersResponse,
} from "./dashboard.types";
import { GetServerSideProps } from "next";
import createVouchers from "../../actions/fetchVoucher";

// Dashboard - Voucher
// SSR

const Voucher = ({
  vouchers,
  companyName,
  partnerId,
  axiosHeader,
}: VoucherProps): JSX.Element => {
  const router = useRouter();
  const [alert, setAlert] = useState<null | string>(null);
  const [add, setAdd] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formData, setFormData] = useState<Voucher>({
    voucherId: "",
    partnerId: partnerId,
    partnerName: companyName,
    voucherName: "",
    voucherDesc: "",
    category: categories[0],
    imageUrl: "",
    stock: 0,
    price: 0,
  });
  const editVoucher = async (
    e: React.ChangeEvent<HTMLInputElement>,
    voucherId: string
  ) => {
    e.preventDefault();
    // filter Data to Get ID of the Voucher
    const voucher = vouchers.find((x) => x.voucherId === voucherId);
    setFormData({
      ...voucher,
      partnerName: companyName,
    });
    setAdd(false);
    setShowModal(true);
  };
  const deleteVoucher = async (
    e: React.ChangeEvent<HTMLInputElement>,
    voucherId: string
  ) => {
    e.preventDefault();
    try {
      const deleteVoucherResp: DeleteVoucherResponse = await axios.delete(
        `https://backend-capstone-h3lwczj22a-et.a.run.app/voucher/${voucherId}`,
        axiosHeader
      );
      if (deleteVoucherResp.status == 200) {
        router.reload();
      } else {
        setAlert(deleteVoucherResp.data.msg);
      }
    } catch (e: any) {
      setAlert(e.message);
    }
  };

  const addVoucher = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setFormData({
      voucherId: "",
      partnerId: partnerId,
      partnerName: companyName,
      voucherName: "",
      voucherDesc: "",
      category: categories[0],
      imageUrl: "",
      stock: 0,
      price: 0,
    });
    setAdd(true);
    setShowModal(true);
  };
  const alertClose = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<SVGSVGElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setAlert(null);
  };
  return (
    <Fragment>
      <Heads />
      <Sidebar location={"Voucher"} companyName={companyName} />
      <div className="md:ml-52 flex flex-col justify-between">
        {alert && (
          <div
            className="bg-red-100 border mb-3 mt-2 mx-4 border-red-400 text-red-700 px-4 py-2 rounded relative"
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
        {showModal ? (
          <Modal
            setShowModal={setShowModal}
            formData={formData}
            setFormData={setFormData}
            add={add}
            axiosHeader={axiosHeader}
          />
        ) : null}
        <div className="flex flex-col h-screen items-center">
          <button
            className="bg-green-600 hover:bg-green-100 text-white hover:text-green-600 font-bold py-2 px-4 border border-white hover:border-green-600 rounded-lg my-4"
            type="button"
            data-modal-toggle="defaultModal"
            onClick={(e: any) => {
              addVoucher(e);
            }}
          >
            Add Voucher
          </button>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            {vouchers.map((voucher) => (
              <VoucherCard
                key={voucher.voucherId}
                voucher={voucher}
                editVoucher={editVoucher}
                deleteVoucher={deleteVoucher}
              />
            ))}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Cookies
  const allCookies: CookieList = cookies(ctx);
  const axiosHeader = {
    headers: { Authorization: `Bearer ${allCookies.token}` },
  };
  // If no token or no user, redirect
  if (!allCookies.token || !allCookies.userId) {
    console.log("cookies missing, redirecting...");
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }

  let companyName: string;
  let vouchers: Voucher[];

  if (allCookies.demo === "true") {
    companyName = "Demo";
    vouchers = createVouchers(Math.floor(Math.random()*4)+4);
  } else {
    try {
      const loadResponse: LoadResponse = await axios.get(
        `${process.env.BASEPATH}/api/load/${allCookies.userId}`,
        {
          headers: {
            Cookie: `token=${allCookies.token}; userId:${allCookies.userId}`,
          },
        }
      );
      companyName = loadResponse.data.companyName;
    } catch (e) {
      console.log(e.message);
      companyName = "";
    }

    try {
      const vouchersResponse: VouchersResponse = await axios.get(
        `https://backend-capstone-h3lwczj22a-et.a.run.app/vouchers?company=${companyName}`,
        axiosHeader
      );
      vouchers = vouchersResponse.data.vouchers;
    } catch (e: any) {
      vouchers = [];
      console.log(e.message);
    }
  }

  return {
    props: { vouchers, companyName, partnerId: allCookies.userId, axiosHeader },
  };
};
export default Voucher;

const categories = [
  "Electronic",
  "Fashion",
  "Food",
  "Transportation",
  "Ecommerce",
];
