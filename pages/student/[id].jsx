import React from "react";
import styles from "../../styles/Student.module.css";

const Student = () => {
  return (
    <div className={styles.container}>
      Student
      <div className={styles.student_info}>
        <p className={styles.info_line}>Name: Aldous Daniel-Bair</p>
        <p className={styles.info_line}>
          Parent(s): Kyrie & Mallory Daniel-Bair
        </p>
        <p className={styles.info_line}>Email: mllr.dnl@gmail.com</p>
        <p className={styles.info_line}>Phone Number(s): 206-290-8014</p>
        <p className={styles.info_line}>Assignments:</p>
        <div className={styles.assignment_box}>
          <ul className={styles.asnmt_list}>
            <li className={styles.asnmt_list_item_title}>
              <div className={styles.asnmt_name}>
                <h5>Assignment Name</h5>
              </div>
              <div className={styles.asnmt_freq}>
                <h5>Frequency</h5>
              </div>
              <div className={styles.asnmt_dur}>
                <h5>Duration</h5>
              </div>
              <div className={styles.asnmt_btns}>
                <h5>Buttons</h5>
              </div>
            </li>
            <li className={styles.asnmt_list_item}>
              <div className={styles.asnmt_name}>
                <p>Assignment 1</p>
              </div>
              <div className={styles.asnmt_freq}>
                <p>1/week</p>
              </div>
              <div className={styles.asnmt_dur}>
                <p>10 minutes</p>
              </div>
              <div className={styles.asnmt_btns}>
                <div className={styles.asnmt_btn}>
                  <p>Edit</p>
                </div>
                <div className={styles.asnmt_btn}>
                  <p>Delete</p>
                </div>
              </div>
            </li>
            <li className={styles.asnmt_list_item}>
              <div className={styles.asnmt_name}>
                <p>Assignment 2</p>
              </div>
              <div className={styles.asnmt_freq}>
                <p>1/day</p>
              </div>
              <div className={styles.asnmt_dur}>
                <p>5 minutes</p>
              </div>
              <div className={styles.asnmt_btns}>
                <div className={styles.asnmt_btn}>
                  <p>Edit</p>
                </div>
                <div className={styles.asnmt_btn}>
                  <p>Delete</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Student;
