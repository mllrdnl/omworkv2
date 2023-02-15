import React from "react";
import Image from "next/image";
import Link from "next/link";
import AdminSidebar from "../../components/AdminSidebar";
import styles from "../../styles/Admin.module.css";
import axios from "axios";

const index = () => {
  return (
    <div className={styles.container}>
      <AdminSidebar />

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
          <ul className={styles.student_list}>
            <li className={styles.student_item_title}>
              <div className={styles.student_name_title}>
                <p>Student Name</p>
              </div>
              <div className={styles.student_asnmts_title}>
                <p>Assignments</p>
              </div>

              <div className={styles.student_edit_title}>
                <p>Buttons</p>
              </div>
            </li>

            <li className={styles.student_item}>
              <div className={styles.student_name}>
                <p>Aldous Daniel-Bair</p>
              </div>
              <div className={styles.student_asnmts}>
                <p>Assignment 1, Assignment 2, Assignment 3</p>
              </div>

              <div className={styles.student_edit}>
                <Link href="/student/1">
                  <p>Edit</p>
                </Link>
              </div>
            </li>
            <li className={styles.student_item}>
              <div className={styles.student_name}>
                <p>Aldous Daniel-Bair</p>
              </div>
              <div className={styles.student_asnmts}>
                <p>Assignment 2, Assignment 3</p>
              </div>

              <div className={styles.student_edit}>
                <Link href="/student/1">
                  <p>Edit</p>
                </Link>
              </div>
            </li>
            <li className={styles.student_item}>
              <div className={styles.student_name}>
                <p>Aldous Daniel-Bair</p>
              </div>
              <div className={styles.student_asnmts}>
                <p>Assignment 1, Assignment 2</p>
              </div>

              <div className={styles.student_edit}>
                <Link href="/student/1">
                  <p>Edit</p>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
