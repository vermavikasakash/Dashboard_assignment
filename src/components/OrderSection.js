import React from "react";
import styles from "./AllComponent.module.css";
import { Button, Table } from "react-bootstrap";
import profileImg from "../assets/profile.jfif";

const OrderSection = () => {
  //? STORING DATA SET
  const orders = [
    {
      customer: "Wade Warren",
      profile: profileImg,
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
    },
    {
      customer: "Jane Cooper",
      profile: profileImg,
      orderNo: "48965786",
      amount: "$365.02",
      status: "Delivered",
    },
    {
      customer: "Guy Hawkins",
      profile: profileImg,
      orderNo: "78898215",
      amount: "$45.88",
      status: "Canceled",
    },
    {
      customer: "Guy Hawkins",
      profile: profileImg,
      orderNo: "78898215",
      amount: "$45.88",
      status: "Pending",
    },
    {
      customer: "Guy Hawkins",
      profile: profileImg,
      orderNo: "78898215",
      amount: "$45.88",
      status: "Canceled",
    },
  ];
  //? JSX START
  return (
    <div className={styles.goal_card}>
      <h5>Recent Orders</h5>
      <Table responsive className="table table-dark table-striped">
        <thead>
          <tr className={styles.table_row}>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className={styles.table_row}>
              <td>
                <span>
                  <img
                    src={order.profile}
                    alt=""
                    className={styles.profileImg}
                  />
                </span>
                {order.customer}
              </td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td>
                <Button
                  size="sm"
                  variant={
                    order.status == "Canceled"
                      ? "outline-danger"
                      : "outline-success"
                  }
                >
                  {order.status}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderSection;
