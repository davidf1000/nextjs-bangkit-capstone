import { SummaryData } from "../pages/dashboard/dashboard.types";

const createRandomSummaryData = ():SummaryData =>({
    transactionsMade: Math.floor(Math.random() * 10),
    voucherSold: Math.floor(Math.random() * 10),
    currentStock: Math.floor(Math.random() * 10),
    pointsEarned: Math.floor(Math.random() * 1000),
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
  })

  export default createRandomSummaryData;