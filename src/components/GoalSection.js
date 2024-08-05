import React from "react";
import { FaHamburger } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { BsCupHotFill } from "react-icons/bs";
import { PiGreaterThanFill  } from "react-icons/pi";
import styles from "./AllComponent.module.css";

const GoalSection = () => {
  return (
    <div className={styles.goal_card_new}>
      <div className={styles.icons_text_div}>
        <div className={styles.icons_backGround}>
          <GoGoal />
        </div>
        <div className={styles.text_symbol}>
          <span>Goals</span>

          <PiGreaterThanFill size={25} />
        </div>
      </div>

      {/* //? 2 */}
      <div className={styles.icons_text_div}>
        <div className={styles.icons_backGround}>
          {" "}
          <FaHamburger />
        </div>
        <div className={styles.text_symbol}>
          <span>Popular Dishes</span>

          <PiGreaterThanFill size={25} />
        </div>
      </div>

      {/* //? 3 */}
      <div className={styles.icons_text_div}>
        <div className={styles.icons_backGround}>
          {" "}
          <BsCupHotFill />
        </div>
        <div className={styles.text_symbol}>
          <span>Menus</span>

          <PiGreaterThanFill  size={25}/>
        </div>
      </div>
    </div>
  );
};

export default GoalSection;
