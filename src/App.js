import React from "react";
import LeftBar from "./components/LeftBar";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import styles from "./components/AllComponent.module.css";

function App() {
  return (
    <Row className="app">
      <Col xs={1} className={styles.sidebar}>
        
        <LeftBar />
      </Col>
      <Col xs={11} className={styles.whole_page}>
        <Header />
        <HomePage />
      </Col>
    </Row>
  );
}

export default App;
