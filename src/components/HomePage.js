import React from "react";
import ActivitySection from "./ActivitySection";
import OrderSection from "./OrderSection";
import FeedbackSection from "./FeedbackSection";
import GoalSection from "./GoalSection";
import styles from "./AllComponent.module.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../assets/get-1-1.png";
import img2 from "../assets/get-2-1.png";
import img3 from "../assets/get-2-2.png";
import img4 from "../assets/get-2-3.png";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Dashboard from "./Dashboard";

const HomePage = () => {
  //? JSX START
  return (
    <div className={styles.dashboard}>
      <Dashboard />
      <Row className="mt-4">
        <Col md={8}>
          <ActivitySection />
        </Col>
        <Col md={4}>
          <GoalSection />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={8}>
          <OrderSection />
        </Col>
        <Col md={4}>
          {" "}
          <FeedbackSection />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
