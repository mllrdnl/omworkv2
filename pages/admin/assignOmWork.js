import React from "react";
import AdminSidebar from "../../components/AdminSidebar";
import styles from "../../styles/AssignOmWork.module.css";
import { FiSearch } from "react-icons/fi";
import OmWorkCard from "../../components/OmWorkCard";

const assignOmWork = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <AdminSidebar />
      </div>
      <div className={styles.body}>
        <h1>Assign OmWork</h1>
        <div className={styles.students}>
          <h2>Select Student(s)</h2>
          <div className={styles.searchBar}>
            <input
              type="text"
              name="studentSearch"
              placeholder="Start typing a student's name..."
            />
            <div className={styles.searchIcon}>
              <FiSearch size={28} color="gray" />
            </div>
          </div>
          <div className={styles.selectedStudents}>
            <h3>Selected Students</h3>
            <div className={styles.selectedBox}>
              <p>Student 1</p>
              <p>Student 2</p>
              <p>Student 3</p>
              <p>Student 4</p>
            </div>
          </div>
        </div>
        <div className={styles.assignments}>
          <h2>Select Assignments</h2>
          <div className={styles.searchBar}>
            <input
              type="text"
              name="studentSearch"
              placeholder="Search Assignments..."
            />
            <div className={styles.searchIcon}>
              <FiSearch size={28} color="gray" />
            </div>
          </div>
          <div className={styles.selectedAsnmts}>
            <h3>Selected Assignments</h3>
            <div className={styles.selectedBox}>
              <OmWorkCard />
            </div>
          </div>
        </div>
        <div className={styles.saveAsnmts}>
          <button className={styles.saveBtn}>Save OmWork</button>
        </div>
      </div>
    </div>
  );
};

export default assignOmWork;
