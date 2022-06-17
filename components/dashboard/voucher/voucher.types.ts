import { AxiosHeader, Voucher } from "../../pagetypes/dashboard.types";

export interface AddVoucherResponse {
    status: number;
    data: {
      msg?: string;
      error: boolean;
      voucher: FormData;
    };
  }
  
export interface ModalProps {
  formData: Voucher;
  setFormData: Function;
  setShowModal: Function;
  add: boolean;
  axiosHeader: AxiosHeader;
}

export interface VoucherCardProps {
  voucher: Voucher;
  editVoucher : Function;
  deleteVoucher : Function;
}