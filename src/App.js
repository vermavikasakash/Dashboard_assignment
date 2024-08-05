import React from "react";
import LeftBar from "./components/LeftBar";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import styles from "./components/AllComponent.module.css";

function App() {
  return (
    <Container fluid className={styles.app}>
      <Row>
        <Col xs={1} className={styles.sidebar}>
          <LeftBar />
        </Col>
        <Col xs={11} className={styles.whole_page}>
          <Header />
          <HomePage />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
