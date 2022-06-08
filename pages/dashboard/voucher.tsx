import { Fragment, useState } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Sidebar from "../../components/dashboard/Sidebar";
import Footer from "../../components/Footer";
import Modal from "../../components/dashboard/voucher/Modal";
import createVouchers from "../../actions/fetchVoucher";
import VoucherCard from "../../components/dashboard/voucher/VoucherCard";

interface Todos {
  userId: number;
  id: number;
  title: string;
  body: string;
}

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

const Voucher = ({ vouchers }:{vouchers:Voucher[]}): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    partnerName: "",
    voucherName: "",
    voucherDesc: "",
    category: "",
    imageUrl: "",
    stock: "",
    price: "",
  });
  return (
    <Fragment>
      <Head>
        <title>EcoTrans Website</title>
      </Head>
      <Sidebar location={"Voucher"} />
      <div className="md:ml-64">
        <div className="flex flex-col h-screen items-center">
        <button
              className="bg-green-600 hover:bg-green-100 text-white hover:text-green-600 font-bold py-2 px-4 border border-white hover:border-green-600 rounded-lg my-4"
              type="button"
              data-modal-toggle="defaultModal"
              onClick={() => setShowModal(true)}
            >
              Add Voucher
            </button> 
          <div className="flex flex-wrap gap-4 items-center">

            {showModal ? (
              <Modal
                add={false}
                setShowModal={setShowModal}
                formData={formData}
                setFormData={setFormData}
              />
            ) : null}
            {/* Card of Voucher */}
            {/* <h6>{JSON.stringify(vouchers)}</h6> */}
            {vouchers.map(voucher=>(
            <VoucherCard voucher={voucher}/>
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
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  const vouchers = createVouchers();
  // Pass data to the page via props
  return { props: { vouchers } };
}
export default Voucher;
