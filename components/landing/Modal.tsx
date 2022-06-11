import axios from "axios";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";


interface ModalProps {
  setShowModal: Function;
  resource : Resource
}
interface Resource{
  title : string ; 
  imagePath : string ; 
}

const Modal = ({resource, setShowModal}:ModalProps): JSX.Element => {
  const backStyle = {
    backgroundImage: `url('${resource.imagePath}')`,
    backgroundColor: "#cccccc",
    backgroundRepeat: "no-repeat",
    backgroundPosition :"center",
    backgroundSize: "cover"
  }
  return (
    <Fragment>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          {/*content*/}
            {/*body*/}
            <div
              className="object-cover rounded h-3/4 w-3/4"
              style={backStyle}
            >
                            <button
                className="p-1 ml-auto border-0 text-black float-right text-3xl font-bold focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="text-white h-6 w-6 text-2xl block focus:outline-none">
                  X
                </span>
              </button>
            </div>

      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </Fragment>
  );
};

export default Modal;

interface AddVoucherResponse {
  status: number;
  data:{
    msg?:string;
    error:boolean;
    voucher:FormData
  }
}