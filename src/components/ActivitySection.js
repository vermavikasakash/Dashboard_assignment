import React from "react";
// import { Line, Bar } from "react-chartjs-2";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styles from "./AllComponent.module.css";

const ActivitySection = () => {
  //? DATA
  // const data = {
  //   labels: ["5", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27"],
  //   datasets: [
  //     {
  //       label: "Weekly",
  //       data: [100, 70, 100, 40, 80, 60, 100, 50, 20, 90, 30, 40],
  //       fill: false,
  //       backgroundColor: "rgba(75,192,192,1)",
  //       borderColor: "rgba(75,192,192,1)",
  //     },
  //   ],
  // };
  const data = [
    { metric: "2015", value: 800 },
    { metric: "2016", value: 400 },
    { metric: "2017", value: 200 },
    { metric: "2018", value: 780 },
    { metric: "2019", value: 190 },
    { metric: "2020", value: 110 },
    { metric: "2021", value: 900 },
    { metric: "2022", value: 90 },
    { metric: "2023", value: 900 },
    { metric: "2024", value: 190 },
    { metric: "2025", value: 500 },
    // more data...
  ];
  //? JSX START
  return (
    <div className={styles.goal_card}>
      <h2>Activity</h2>
      {/* <Bar data={data} height={80} /> */}
      <BarChart
        width={650}
        height={215}
        data={data}
        className={styles.chart_width}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="metric" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ActivitySection;
