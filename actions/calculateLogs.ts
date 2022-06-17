import {
  Purchase,
  Transaction,
  Voucher,
  VoucherAndPurchase,
} from "../components/pagetypes/dashboard.types";

const calculateLogs = (
  vouchers: Voucher[],
  purchases: Purchase[]
): Transaction[] => {
  // Create array of voucher id
  const arrayVoucherId = vouchers.map((item) => item.voucherId);
  // Filter purchases
  const purchaseUpdated: VoucherAndPurchase[] = purchases
    .filter((item) => arrayVoucherId.includes(item.voucherId))
    .map((item) => {
      // find voucher
      const voucher = vouchers.find(
        (voucher) => voucher.voucherId === item.voucherId
      );
      return {
        ...item,
        ...voucher,
      };
    });
    const result:Transaction[] = purchaseUpdated.map((item)=>{
      return({
        Date: item.buyDate,
        voucherName: item.voucherName,
        category : item.category,
        quantity : item.buyQuantity,
        totalPrice : item.buyQuantity*item.price
      })
    })
    return result
};

export default calculateLogs;
