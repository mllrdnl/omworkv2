import React from "react";
import styles from "../../styles/Student.module.css";

const Student = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        Student
        <div className={styles.student_info}>
          <div className={styles.info_line}>
            <p className={styles.info_line_title}>Name: </p> Aldous Daniel-Bair
          </div>
          <div className={styles.info_line}>
            <p className={styles.info_line_title}>Parent(s):</p> Kyrie & Mallory
            Daniel-Bair
          </div>
          <div className={styles.info_line}>
            <p className={styles.info_line_title}>Email:</p> mllr.dnl@gmail.com
          </div>
          <div className={styles.info_line}>
            <p className={styles.info_line_title}>Phone Number(s):</p>{" "}
            206-290-8014
          </div>
          <div className={styles.info_line}>
            <p className={styles.info_line_title}>Assignments:</p>
          </div>
          {/* --- Current Assignments ---- */}
          <div className={styles.assignment_box}>
            <h4 className={styles.current_asnmt_header}>Current</h4>
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
                    <p>Inactivate</p>
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
                    <p>Inactivate</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* ---- Previous Assignments ---- */}
          <div className={styles.previous_asnmts}>
            <h4 className={styles.prev_asnmt_header}>Previous Assignments</h4>
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
                    <p>Re-Activate</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
