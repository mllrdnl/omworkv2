import React from "react";
import Image from "next/image";
import styles from "../../styles/Admin.module.css";

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Image src="/MCW_logo.png" alt="" width={180} height={265} />
        <h1>OmWork</h1>

        <div className={styles.sidebar_links}>
          <div>
            <p className={styles.sidebar_link}>Student Dashboard</p>
            <p className={styles.sidebar_link}>Library</p>
            <p className={styles.sidebar_link}>Settings</p>
            <p className={styles.sidebar_link}>Logout</p>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.header}>
          <div className={styles.welcome}>
            <h2>Hello, Teacher!</h2>
            <p>Today is Monday, Febuary 5th</p>
          </div>
          <div className={styles.admin_btns}>
            <div className={styles.add_student}>Add Student</div>
            <div className={styles.add_hw}>Add Homework</div>
          </div>
        </div>

        <div className={styles.student_container}>
          <h2>Students</h2>
        </div>
      </div>
    </div>
  );
};

export default index;
