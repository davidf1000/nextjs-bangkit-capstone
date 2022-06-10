import { Fragment, useState } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Sidebar from "../../components/dashboard/Sidebar";
import Footer from "../../components/Footer";
import Modal from "../../components/dashboard/voucher/Modal";
import createVouchers from "../../actions/fetchVoucher";
import VoucherCard from "../../components/dashboard/voucher/VoucherCard";
import cookies from "next-cookies";
import { useRouter } from "next/router";
import axios from "axios";

export interface Voucher {
  voucherId: string;
  partnerId: string;
  partnerName: string;
  voucherName: string;
  voucherDesc: string;
  category: string;
  imageUrl: string;
  stock: number;
  price: number;
}

// Dashboard - Voucher
// SSR
interface VoucherProps {
  vouchers: Voucher[];
  companyName: string;
  partnerId: string;
  axiosHeader: any;
}
const Voucher = ({
  vouchers,
  companyName,
  partnerId,
  axiosHeader,
}: VoucherProps): JSX.Element => {
  const router = useRouter();
  const [add, setAdd] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    voucherId: "",
    partnerId: partnerId,
    partnerName: companyName,
    voucherName: "",
    voucherDesc: "",
    category: categories[0],
    imageUrl: "",
    stock: "",
    price: "",
  });
  const editVoucher = async (
    e: React.ChangeEvent<HTMLInputElement>,
    voucherId: string
  ): void => {
    e.preventDefault();
    // filter Data to Get ID of the Voucher
    const voucher = vouchers.find((x) => x.voucherId === voucherId);
    console.log("Voucher to Edit: ", voucher);

    setFormData({
      ...voucher,
      partnerName: companyName,
    });
    setAdd(false);
    setShowModal(true);
    console.log("will edit voucher with ID: ", voucherId);
    // router.reload()
  };
  const deleteVoucher = (
    e: React.ChangeEvent<HTMLInputElement>,
    voucherId: string
  ): void => {
    e.preventDefault();
    console.log("will delete voucher with ID: ", voucherId);
    router.reload();
  };

  const addVoucher = (
    e: React.ChangeEvent<HTMLInputElement>,
    voucherId: string
  ): void => {
    e.preventDefault();
    console.log("will Add New voucher");
    // Reset form state
    setFormData({
      voucherId: "",
      partnerId: partnerId,
      partnerName: companyName,
      voucherName: "",
      voucherDesc: "",
      category: categories[0],
      imageUrl: "",
      stock: "",
      price: "",
    });
    setAdd(true);
    setShowModal(true);
  };
  return (
    <Fragment>
      <Head>
        <title>EcoTrans Website</title>
      </Head>
      <Sidebar location={"Voucher"} companyName={companyName} />
      <div className="md:ml-52">
        {showModal ? (
          <Modal
            add={false}
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
            onClick={(e) => {
              addVoucher(e);
            }}
          >
            Add Voucher
          </button>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            {/* Card of Voucher */}
            {/* <h6>{JSON.stringify(vouchers)}</h6> */}
            {vouchers.map((voucher) => (
              <VoucherCard
                key={voucher.voucherId}
                voucher={voucher}
                editVoucher={editVoucher}
                deleteVoucher={deleteVoucher}
              />
            ))}
            {/*  */}
            <div className="flex flex-wrap"></div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

// This gets called on every request
export async function getServerSideProps(ctx) {
  // Cookies
  const allCookies: Cookies = cookies(ctx);
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
  let companyName;
  const axiosHeader = {
    headers: { Authorization: `Bearer ${allCookies.token}` },
  };

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
  // Fetch data from external API
  const vouchers = createVouchers();
  // Pass data to the page via props
  console.log(axiosHeader);

  return {
    props: { vouchers, companyName, partnerId: allCookies.userId, axiosHeader },
  };
}
export default Voucher;

interface LoadResponse {
  status: number;
  data: {
    companyName: string;
  };
}
const categories = [
  "Electronic",
  "Fashion",
  "Food",
  "Transportation",
  "Ecommerce",
];
