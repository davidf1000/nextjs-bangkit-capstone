import axios from "axios";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { AddVoucherResponse, ModalProps } from "./voucher.types";

const Modal = ({
  formData,
  setFormData,
  setShowModal,
  add,
  axiosHeader,
}: ModalProps): JSX.Element => {
  const router = useRouter();
  const [alert, setAlert] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null);
  const {
    voucherId,
    partnerId,
    partnerName,
    voucherName,
    voucherDesc,
    category,
    imageUrl,
    stock,
    price,
  } = formData;
  const modalTitle: string = add ? "Add Voucher" : "Edit Voucher";
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async () => {
    setLoading(true);
    if (add) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "davidfauzi");
      data.append("cloud_name", "davidfauzi");
      try {
        const resp = await axios.post(
          "https://api.cloudinary.com/v1_1/davidfauzi/image/upload",
          data
        );
        if (resp.status == 200) {
          setFormData({ ...formData, imageUrl: resp.data.url });
        }
        // post Add Voucher
        const body = {
          partnerId,
          partnerName,
          voucherName,
          voucherDesc,
          category,
          imageUrl: resp.data.url,
          stock: parseInt(String(stock)),
          price: parseInt(String(price)),
        };
        const addVoucherResp: AddVoucherResponse = await axios.post(
          "https://backend-capstone-h3lwczj22a-et.a.run.app/voucher",
          body,
          axiosHeader
        );

        if (addVoucherResp.status == 200) {
          setLoading(false);
          setShowModal(false);
          router.reload();
        } else {
          setAlert(addVoucherResp.data.msg);
          setLoading(false);
        }
      } catch (e) {
        console.log(e.message);
        setAlert(e.message);
        setLoading(false);
      }
    } else {
      const body = {
        partnerId,
        partnerName,
        voucherName,
        voucherDesc,
        category,
        imageUrl,
        stock: parseInt(String(stock)),
        price: parseInt(String(price)),
      };
      try {
        const putVoucherResp: AddVoucherResponse = await axios.put(
          `https://backend-capstone-h3lwczj22a-et.a.run.app/voucher/${voucherId}`,
          body,
          axiosHeader
        );

        if (putVoucherResp.status == 200) {
          setLoading(false);
          setShowModal(false);
          router.reload();
        } else {
          setAlert(putVoucherResp.data.msg);
          setLoading(false);
        }
      } catch (e) {
        console.log(e.message);
        setAlert(e.message);
        setLoading(false);
      }
    }
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
      <div className="md:ml-52 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto w-96  max-w-3xl bg-red-200">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-2xl font-semibold">{modalTitle}</h3>
              <button
                className="p-1 ml-auto border-0 text-black float-right text-3xl font-bold focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="text-green-600 h-6 w-6 text-2xl block focus:outline-none">
                  X
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="voucherName"
                >
                  Voucher Name
                </label>
                <input
                  className='shadow appearance-none border rounded w-1/2" py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-5/6'
                  id="voucherName"
                  type="text"
                  placeholder="voucherName"
                  name="voucherName"
                  value={voucherName}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="voucherDesc"
                >
                  Voucher Description
                </label>
                <input
                  className='shadow appearance-none border rounded w-1/2" py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-5/6'
                  id="voucherDesc"
                  type="text"
                  placeholder="voucherDesc"
                  name="voucherDesc"
                  value={voucherDesc}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="mb-4 w-5/6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="category"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={(e) => {
                    onChange(e);
                  }}
                  className="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="stock"
                >
                  Stock
                </label>
                <input
                  className='shadow appearance-none border rounded w-1/2" py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-5/6'
                  id="stock"
                  type="text"
                  placeholder="stock"
                  name="stock"
                  value={stock}
                  onChange={(e) => onChange(e)}
                />
              </div>
              {add ? (
                <div className="mb-4 w-5/6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="imageUrl"
                  >
                    Image
                  </label>
                  <input
                    id="imageUrl"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="block w-full text-md text-white bg-green-600 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    type="file"
                  />
                  <p
                    className="mt-1 text-sm text-gray-500"
                    id="file_input_help"
                  >
                    SVG, PNG, or JPG.
                  </p>
                </div>
              ) : null}

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  className='shadow appearance-none border rounded w-1/2" py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-5/6'
                  id="price"
                  type="text"
                  placeholder="price"
                  name="price"
                  value={price}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
              {loading ? (
                <div className="flex items-center justify-center ">
                  <div className="w-10 h-10 border-b-2 border-gray-900 rounded-full animate-spin"></div>
                </div>
              ) : (
                <Fragment>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-green-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      onSubmit();
                    }}
                  >
                    Save Changes
                  </button>
                </Fragment>
              )}
            </div>
            {alert && (
              <div
                className="bg-red-100 border mb-3 mx-4 border-red-400 text-red-700 px-4 py-3 rounded relative"
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
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </Fragment>
  );
};

export default Modal;

const categories = [
  "Electronic",
  "Fashion",
  "Food",
  "Transportation",
  "Ecommerce",
];
