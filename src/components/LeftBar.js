import React from "react";
import { FaHome, FaChartPie, FaCog, FaCartPlus } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import styles from "./AllComponent.module.css";
const LeftBar = () => {
  return (
    <div >
      {/* <h2 className="p-4">My Dashboard</h2> */}
      <CgMenuGridO className={styles.menu_grid} />
      <ul className="list-unstyled">
        <li className="p-3 home_icon">
          <FaHome />
        </li>
        <li className="p-3 home_icon_2">
          <FaChartPie />
        </li>

        <li className="p-3 home_icon_2">
          <FaCog />
        </li>
        <li className="p-3 home_icon_2">
          <FaCartPlus />
        </li>
      </ul>
    </div>
  );
};

export default LeftBar;
