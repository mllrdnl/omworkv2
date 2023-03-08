import React from "react";
import Link from "next/link";
import AdminSidebar from "../../components/AdminSidebar";
import styles from "../../styles/Admin.module.css";
import StudentList from "../../components/StudentList";
import StudentForm from "../../components/StudentForm";

import { useSelector, useDispatch } from "react-redux";
import { deleteAction, toggleChangeAction } from "../../redux/reducer";
import { deleteStudent, getStudents } from "../../lib/helper.js";
import { useQueryClient } from "react-query";

const index = () => {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const handler = () => {
    dispatch(toggleChangeAction());
  };

  const deletehandler = async () => {
    if (deleteId) {
      await deleteStudent(deleteId);
      await queryClient.prefetchQuery("students", getStudents);
      await dispatch(deleteAction(null));
    }
  };
  const cancelhandler = async () => {
    console.log("cancel");
    await dispatch(deleteAction(null));
  };

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
            <div className={styles.add_student} onClick={handler}>
              <p>Add Student</p>
            </div>
            <div className={styles.add_hw}>
              <Link href="/admin/assignOmWork">
                <p>Assign omWork</p>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          {visible ? <StudentForm /> : <></>}
          <StudentList />
        </div>
      </div>
    </div>
  );
};

export default index;
