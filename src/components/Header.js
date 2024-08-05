import React from "react";
import styles from "./AllComponent.module.css";
import { MdOutlineMail } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  // ? JSX START
  return (
    <div className={styles.header_div}>
      <div className={styles.search_div}>
        <span className={styles.search_icon}>
          <IoMdSearch />
        </span>
        <input
          type="text"
          // value="Search"
          placeholder="Search..."
          className={styles.search_input}
        />
      </div>

      <div>
        <MdOutlineMail className={styles.icon_background} />
        <CiSettings className={styles.icon_background} />
        <IoMdNotifications className={styles.icon_background} />
        <CgProfile className={styles.icon_background} />
      </div>
    </div>
  );
};

export default Header;
