import React from "react";
import styles from "./AllComponent.module.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../assets/get-1-1.png";
import img2 from "../assets/get-2-1.png";
import img3 from "../assets/get-2-2.png";
import img4 from "../assets/get-2-3.png";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Dashboard = () => {
  //? TOP
  const TopSection = ({ title, value, image, icon }) => {
    return (
      <div className={styles.goal_card}>
        <img src={image} />
        <h6>{title}</h6>
        <div className={styles.number_icon_div}>
          <div className={styles.heading}>{value}</div>
          <div
            className={
              icon !== "1" ? styles.profit_percent1 : styles.profit_percent2
            }
          >
            {icon == "1" ? <IoMdArrowDropup /> : <IoMdArrowDropdown />} 3%
          </div>
        </div>
      </div>
    );
  };
  // ! JSX START
  return (
    <>
      <p className={styles.dash_text}>Dashboard</p>
      <Row>
        <Col md={8}>
          <Row>
            <Col xs={6} sm={3} className="">
              <TopSection
                title="Total Orders"
                value="75"
                image={img2}
                icon="1"
              />
            </Col>
            <Col xs={6} sm={3} className="">
              <TopSection
                title="Total Delivered"
                value="70"
                image={img1}
                icon="2"
              />
            </Col>
            <Col xs={6} sm={3} className="">
              <TopSection
                title="Total Canceled"
                value="05"
                image={img3}
                icon="1"
              />
            </Col>
            <Col xs={6} sm={3} className="">
              <TopSection
                title="Total Revenue"
                value="$12k"
                image={img4}
                icon="2"
              />
            </Col>
          </Row>
        </Col>
        {/* //?  PROFIT COLUMN*/}
        <Col md={4}>
          <div className={styles.profit_card}>
            <div>
              <h6>Net Profit</h6>
              <p className={styles.profit_price}>$6759.25</p>
              <span className={styles.profit_percent2}>
                <IoMdArrowDropup />
                3%
              </span>
            </div>
            {/* // progress */}
            <div className={styles.circle_and_text}>
              <div class="progress-circle">
                <div class="circle">
                  <div class="mask full">
                    <div class="fill"></div>
                  </div>
                  <div class="mask half">
                    <div class="fill"></div>
                    <div class="fill fix"></div>
                  </div>
                </div>
                <div class="inside-circle">
                  70%
                  <p className={styles.circle_text}>Goal Completed</p>
                </div>
              </div>
              <p className={styles.circle_text}>
                The value here has been rounded off
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
