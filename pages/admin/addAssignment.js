import React from "react";
import AdminSidebar from "../../components/AdminSidebar.jsx";
import styles from "../../styles/AddAssignment.module.css";

const addAssignment = () => {
  return (
    <div className={styles.container}>
      <AdminSidebar />
      <div className={styles.formContainer}>
        <div className={styles.assignForm}>
          <h2>Add an Assignment</h2>
          <form>
            <div className={styles.assignmentName}>
              <label name="assignName">Name</label>
              <input type="text" name="assignName" />
            </div>
            <div className={styles.assignmentCategory}>
              <label>Category</label>
              <select>
                <option value="book">Book</option>
                <option value="mindfulness">Mindfulness</option>
                <option value="stretch">Stretch</option>
              </select>
            </div>

            <div className={styles.fileUpload}>
              <label>File</label>
              <input type="file" name="assignment" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default addAssignment;
