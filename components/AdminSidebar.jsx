import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/AdminSb.module.css";

const AdminSidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/MCW_logo.png" alt="" width={180} height={265} />
        <h1>OmWork</h1>
      </div>

      <div className={styles.sidebar_links}>
        <Link href="/" className={styles.sidebar_link}>
          <p>Student Dashboard</p>
        </Link>
        <Link href="/admin/library" className={styles.sidebar_link}>
          <p>Library</p>
        </Link>
        <Link href="/" className={styles.sidebar_link}>
          <p>Settings</p>
        </Link>
        <button className={styles.sidebar_link}>Log Out</button>
      </div>
    </div>
  );
};

export default AdminSidebar;
