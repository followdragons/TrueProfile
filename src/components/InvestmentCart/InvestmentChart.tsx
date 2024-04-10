import "chart.js/auto";

import { useQuery } from "@tanstack/react-query";
import { Line } from "react-chartjs-2";
import { twMerge } from "tailwind-merge";

import { queryKeys } from "~/libs/queries/queryKeys.ts";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      grid: {
        display: false, // Скрыть сетку по оси X
      },
      beginAtZero: true, // Начало оси Y с 0
      // title: {
      // display: true,
      // text: "Accumulated Amount (USD)", // Название оси Y
      // },
    },
    x: {
      grid: {
        display: false, // Скрыть сетку по оси X
      },
      title: {
        display: true,
        text: "Date", // Название оси X
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Your profit chart",
    },
  },
};

const formatDateLabel = (dateString) => {
  const date = new Date(dateString);
  const monthNames = [
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
  return `${monthNames[date.getMonth()]} ${date.getDate()}`;
};

export const InvestmentChart = ({ amount, period }) => {
  console.log({ amount, period });
  const { data: fetchedData } = useQuery({
    ...queryKeys.investmentChart.all,
  });

  const chartData = fetchedData?.chart_data || [
    {
      invested_amount: 0,
      accumulated_amount_usd: 0,
    },
  ];

  const { currency, amount_usd } = fetchedData?.investment || {
    currency: "",
    amount_usd: 0,
  };

  const labels = chartData.map((item) => formatDateLabel(item.date));
  const dataPoints = chartData.map((item) => item.accumulated_amount_usd);

  // Обновление структуры данных графика
  const data = {
    labels,
    datasets: [
      {
        label: "Accumulated Amount (USD)",
        data: dataPoints,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const { accumulated_amount_usd, invested_amount, period_type } =
    chartData[chartData.length - 1];

  const pnl = (accumulated_amount_usd - invested_amount).toFixed(0);

  return (
    <div className="m-auto w-full gap-10 flex flex-col text-center">
      <div className="m-auto">
        <div>
          Currency: <strong className="text-blue-500">{currency}</strong>
        </div>
        <div>
          Investment <strong> {amount_usd} $ </strong>
          {period_type}
        </div>
        <div>
          Invested: <span className="text-amber-400">{invested_amount} $</span>
        </div>
      </div>
      <div style={{ height: "300px" }} className="w-full">
        <Line height="300px" options={options} data={data} />
      </div>
      <div className="m-auto">
        <div className={twMerge(+pnl > 0 ? "text-green-400" : "text-red-500")}>
          P&L: <strong>{pnl}</strong> $
        </div>
        <div>Final value: {accumulated_amount_usd.toFixed(0)} $</div>
      </div>
    </div>
  );
};
