import React from "react";
import AdminSidebar from "../../components/AdminSidebar";
import styles from "../../styles/AddStudent.module.css";

const addStudent = () => {
  return (
    <div className={styles.container}>
      <AdminSidebar />
      <div className={styles.formContainer}>
        <div className={styles.addForm}>
          <h2>Add a Student</h2>
          <form>
            <h3>Student:</h3>
            <div className={styles.studentName}>
              <label name="studentFirst">First Name</label>
              <input type="text" name="studentFirst" />
              <label name="studentLast">Last Name</label>
              <input type="text" name="studentLast" />
            </div>
            <div className={styles.parentInfo}>
              <h3>Parent's Info:</h3>
              <div className={styles.parentName}>
                <label name="parentFirst">First Name</label>
                <input type="text" name="parentFirst" />
                <label name="parentLast">Last Name</label>
                <input name="parentLast" />
              </div>
              <div className={styles.parentEmail}>
                <label name="email">Email</label>
                <input name="email" type="email" />
                <label name="email">Password</label>
                <input name="email" type="password" />
              </div>
              <div className={styles.assign}>
                <h3>omWork Assignments</h3>
              </div>
              <div className={styles.products}>
                <h3>Recommended Products</h3>
              </div>
              <div className={styles.btnRow}>
                <div className={styles.sendEmail}>
                  <input type="checkbox" name="sendEmail" />
                  <label name="sendEmail">Email Parent</label>
                </div>
                <button>Save Student</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default addStudent;
