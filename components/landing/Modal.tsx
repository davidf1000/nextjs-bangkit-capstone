import { Fragment } from "react";
import { ModalProps } from "./landing.types";

const Modal = ({ resource, setShowModal }: ModalProps): JSX.Element => {
  const backStyle = {
    backgroundImage: `url('${resource.imagePath}')`,
    backgroundColor: "#cccccc",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
  };
  return (
    <Fragment>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="object-cover rounded h-5/6 w-11/12" style={backStyle}>
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
