import React from "react";
import styles from "../styles/AddAsnmtForm.module.css";

const AddAssignmentForm = () => {
  return (
    <div>
      <h2>Add a New Assignment</h2>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="category" placeholder="Category" />
    </div>
  );
};

export default AddAssignmentForm;
