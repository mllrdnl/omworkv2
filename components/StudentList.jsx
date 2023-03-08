import React from "react";
import { useQuery } from "react-query";
import styles from "../styles/StudentList.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleChangeAction,
  updateAction,
  deleteAction,
} from "../redux/reducer";
import { getStudents } from "../lib/helper.js";
import { BiEdit, BiTrash } from "react-icons/bi";

const StudentList = () => {
  const { isLoading, isError, data, error } = useQuery("students", getStudents);
  console.log(data);

  if (isLoading) return <div>Employee is loading...</div>;
  if (isError) return <div>Got Error {error}</div>;
  console.log(error);

  return (
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

        {data.map((obj, i) => (
          <Li {...obj} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default StudentList;

function Li({
  _id,
  firstName,
  lastName,
  parentFirst,
  parentLast,
  email,
  homework,
  products,
}) {
  const visible = useSelector((state) => state.app.client.toggleForm);
  const dispatch = useDispatch();

  const onUpdate = () => {
    dispatch(toggleChangeAction(_id));
    if (visible) {
      dispatch(updateAction(_id));
    }
  };

  const onDelete = () => {
    if (!visible) {
      dispatch(deleteAction(_id));
    }
  };

  return (
    <li className={styles.student_item}>
      <p>
        {firstName || "uknown"} {lastName || "unknown"}
      </p>

      <p>{homework || "unknown"}</p>

      <div className={styles.buttons}>
        <div className={styles.editBtn} onClick={onUpdate}>
          <BiEdit size={28} />
        </div>
        <div className={styles.deleteBtn}>
          <BiTrash size={28} />
        </div>
      </div>
    </li>
  );
}
