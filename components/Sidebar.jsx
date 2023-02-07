import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/MCW_logo.png" alt="" width={180} height={265} />
        <h1>OmWork</h1>
      </div>

      <div className={styles.sidebar_links}>
        <Link href="/" className={styles.sidebar_link}>
          <p>Dashboard</p>
        </Link>
        <Link href="/assignments/1" className={styles.sidebar_link}>
          <p>Assignments</p>
        </Link>
        <Link href="/progress/1" className={styles.sidebar_link}>
          <p>Progress</p>
        </Link>
        <Link href="/settings/1" className={styles.sidebar_link}>
          <p>Settings</p>
        </Link>
        <button className={styles.sidebar_link}>Log Out</button>
      </div>
    </div>
  );
};

export default Sidebar;
