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
  // 1. Number Transaction
  const transactionsMade = purchaseUpdated.length;
  // 2. Number of Voucher sold
  const voucherSold = purchaseUpdated.reduce(
    (acc, item) => acc + item.buyQuantity,
    0
  );
  // 3. Number of Current Stock
  const currentStock = vouchers.reduce((acc, item) => acc + item.stock, 0);
  // 4. Number of Points Earned
  const pointsEarned = purchaseUpdated.reduce(
    (acc, item) => acc + item.buyQuantity * item.price,
    0
  );
  // 5. list of voucher names, list of datas
  var myMap = new Map();
  // loop for each purchase, count
  purchaseUpdated.forEach((item) => {
    let count: number;
    if (myMap.has(item.voucherName)) {
      count = myMap.get(item.voucherName);
    } else {
      count = 0;
    }
    myMap.set(item.voucherName, count + item.buyQuantity);
  });
  const listVoucherNames = [];
  const listVoucherBuy = [];
  const listVoucherColor = [];
  myMap.forEach((value, key) => {
    listVoucherNames.push(key);
    listVoucherBuy.push(value);
    listVoucherColor.push(
      `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)})`
    );
  });
  console.log(listVoucherNames);
  console.log(listVoucherBuy);

  // 6. Get list of data (size 12) for each month
  const monthLabel = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const listLineData = [];
  // Assuming it's only 2022
  monthLabel.forEach((month, idx) => {
    // Find list of voucher with the correct
    const sumPurchase = purchaseUpdated
      .filter((item) => {
        const date = new Date(item.buyDate);
        return date.getMonth() === idx;
      })
      .map((item) => item.buyQuantity)
      .reduce((acc, item) => acc + item, 0);
    listLineData.push(sumPurchase);
  });
  const result = {
    transactionsMade: 0,
    voucherSold: 0,
    currentStock: 0,
    pointsEarned: 0,
    dataDoughnut: {
      labels: listVoucherNames,
      datasets: [
        {
          data: listVoucherBuy,
          backgroundColor: listVoucherColor,
          label: "Voucher Sales Comparison",
          hoverOffset: 4,
        },
      ],
    },
    dataLine: {
      labels: monthLabel,
      datasets: [
        {
          label: new Date().getFullYear(),
          backgroundColor: "#03a9f4",
          borderColor: "#03a9f4",
          data: listLineData,
          fill: false,
        },
      ],
    },
  };
  return result;
};

export default calculateSummary;
