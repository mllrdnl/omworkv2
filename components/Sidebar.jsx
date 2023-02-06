import React from "react";
import Image from "next/image";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/MCW_logo.png" alt="" width={180} height={265} />
        <h1>OmWork</h1>
      </div>

      <div className={styles.sidebar_links}>
        <p className={styles.sidebar_link}>Dashboard</p>
        <p className={styles.sidebar_link}>Assignments</p>
        <p className={styles.sidebar_link}>Progress</p>
        <p className={styles.sidebar_link}>Settings</p>
        <p className={styles.sidebar_link}>Log Out</p>
      </div>
    </div>
  );
};

export default Sidebar;
