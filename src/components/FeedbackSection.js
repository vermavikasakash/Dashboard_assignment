import React from "react";
import styles from "./AllComponent.module.css";
import profileImg from "../assets/profile.jfif";

const FeedbackSection = () => {
  //? STORING DATA SET
  const feedback = [
    {
      name: "Jenny Wilson",
      profile: profileImg,
      rating: 5,
      comment:
        "The food was excellent and so was the service. I really enjoyed my meal. Thank you vikas for inviting me.",
    },
    {
      name: "Dianne Russell",
      profile: profileImg,
      rating: 4,
      comment: "We enjoyed the Eggs Benedict served.",
    },
    {
      name: "Devon Lane",
      profile: profileImg,
      rating: 5,
      comment: "The waiter was very kind and professional.",
    },
  ];
  //? JSX START
  return (
    <div className={styles.goal_card}>
      <h5>Customer's Feedback</h5>
      <ul className="list-unstyled">
        {feedback.map((fb, index) => (
          <li key={index} className="p-2">
            <img src={fb.profile} alt="" className={styles.profileImg} />{" "}
            <strong>{fb.name}</strong>
            <div>{"⭐".repeat(fb.rating)}</div>
            <p className={styles.fb_comment}>{fb.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackSection;
