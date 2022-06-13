export interface SummaryData {
  transactionsMade: number;
  voucherSold: number;
  currentStock: number;
  pointsEarned: number;
  dataDoughnut: ChartDoughnutData;
  dataLine: ChartLineData;
}

export interface SummaryProps {
  companyName: string;
  summaryData: SummaryData;
}

interface ChartDoughnutData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    label: string;
    hoverOffset: number;
  }[];
}

interface ChartLineData {
  labels: string[];
  datasets: {
    label: number;
    backgroundColor: string;
    borderColor: string;
    data: number[];
    fill: boolean;
  }[];
}

export interface LoadResponse {
  status: number;
  data: {
    companyName: string;
  };
}

export interface LogsProps {
  companyName: string;
  transactions: Transaction[];
}

export interface Transaction {
  Date: string;
  voucherName: string;
  category: string;
  quantity: number;
  totalPrice: number;
}

export interface VouchersResponse {
  status: number;
  data: {
    error: boolean;
    vouchers: Voucher[];
  };
}

export interface DeleteVoucherResponse {
  status: number;
  data: {
    msg?: string;
    error: boolean;
  };
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
export interface VoucherProps {
  vouchers: Voucher[];
  companyName: string;
  partnerId: string;
  axiosHeader: AxiosHeader;
}

export interface AxiosHeader {
  headers : {
    Authorization : string ;
  }
}

export interface GetVouchersResponse {
  status : number;
  data : {
    error : boolean;
    vouchers: Voucher[]
  }
}

export interface Purchase{
  purchaseId : string;
  voucherId : string;
  userId : string;
  buyDate : string;
  buyQuantity : number;
}

export interface VoucherAndPurchase extends Voucher,Purchase{

}

export interface GetPurchasesResponse {
  status : number;
  data : {
    error : boolean;
    msg : string;
    purchases: Purchase[]
  }
}