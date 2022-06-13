import {
  Purchase,
  SummaryData,
  Voucher,
  VoucherAndPurchase,
} from "../pages/dashboard/dashboard.types";

const calculateSummary = (
  vouchers: Voucher[],
  purchases: Purchase[]
): SummaryData => {
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
  console.log(purchaseUpdated);
  // 1. Number Transaction
//   const transactionsMade = len(purchaseUpdated);
  // 2. Number of Voucher sold
//   const voucherSold = purchaseUpdated.reduce(
//     (acc, item) => (acc + item.buyQuantity),0);
//   // 3. Number of Current Stock
//   const currentStock = vouchers.reduce((acc,item)=>(acc+item.stock),0);
//   // 4. Number of Points Earned
//   const pointsEarned = purchaseUpdated.reduce(
//     (acc, item) => (acc + (item.buyQuantity*item.price)),0);
//   // 5. list of voucher names, list of datas
//     var myMap = new Map();
//     // loop for each purchase, count 
//     purchaseUpdated.forEach(item=>{
//         myMap.set(item.partnerName,parseInt(myMap.get(item.partnerName))+item.buyQuantity)
//     })
//     console.log(myMap);
    
  // 6. Get list of data (size 12) for each month
  const result = {
    transactionsMade: 0,
    voucherSold: 0,
    currentStock: 0,
    pointsEarned: 0,
    dataDoughnut: {
      labels: ["Free ongkir 10 ribu ", "Cashback 15%", "Diskon belanja 5%"],
      datasets: [
        {
          data: [5, 2, 3],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          label: "Voucher Sales Comparison",
          hoverOffset: 4,
        },
      ],
    },
    dataLine: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: new Date().getFullYear(),
          backgroundColor: "#03a9f4",
          borderColor: "#03a9f4",
          data: [5, 3, 5, 2, 2, 3],
          fill: false,
        },
      ],
    },
  };
  return result;
};

export default calculateSummary;
