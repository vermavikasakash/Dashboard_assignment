import React from "react";
import { Line, Bar } from "react-chartjs-2";
import styles from "./AllComponent.module.css";

const ActivitySection = () => {
  //? DATA
  const data = {
    labels: ["5", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27"],
    datasets: [
      {
        label: "Weekly",
        data: [100, 70, 100, 40, 80, 60, 100, 50, 20, 90, 30, 40],
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  //? JSX START
  return (
    <div className={styles.goal_card}>
      <h2>Activity</h2>
      <Bar data={data} height={80} />
    </div>
  );
};

export default ActivitySection;
