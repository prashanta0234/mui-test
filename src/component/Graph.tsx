import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
};

const labels: string[] = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const values: number[] = [
  100, 200, 300, 150, 50, 30, 500, 300, 250, 150, 430, 460,
];

export const data = {
  labels,
  datasets: [
    {
      label: "$",
      fill: true,
      data: values,

      borderColor: "#7B61FF",
      background: "linear-gradient(to bottom, #7b61ff 0%, #ffffff 30%)",
    },
  ],
};

export const Graph: React.FC = () => {
  return <Line data={data} />;
};
