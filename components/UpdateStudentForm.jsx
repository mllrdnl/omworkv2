import React from "react";
import { useReducer } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getStudent, getStudents, updateStudent } from "../lib/helper.js";
import styles from "../styles/AddStudent.module.css";

const UpdateStudentForm = ({ formId, formData, setFormData }) => {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery(
    ["students", formId],
    () => getStudent(formId)
  );

  const UpdateMutation = useMutation(
    (newData) => updateStudent(formId, newData),
    {
      onSuccess: async (data) => {
        queryClient.prefetchQuery("students", getStudents);
      },
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const {
    firstName,
    lastName,
    parentFirst,
    parentLast,
    email,
    password,
    homework,
    products,
  } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();

    let updated = Object.assign({}, data, formData);
    console.log(updated);
    await UpdateMutation.mutate(updated);
  };
  return (
    <div className={styles.formContainer}>
      <div className={styles.addForm}>
        <h2>Update Student</h2>
        <form onSubmit={handleSubmit}>
          <h3>Student:</h3>
          <div className={styles.studentName}>
            <div className={styles.studentFirst}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={setFormData}
                default={firstName}
              />
            </div>
            <div className={styles.studentLast}>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={setFormData}
                default={lastName}
              />
            </div>
          </div>
          <div className={styles.parentInfo}>
            <h3>Parent's Info:</h3>
            <div className={styles.parentName}>
              <input
                type="text"
                name="parentFirst"
                placeholder="First Name"
                onChange={setFormData}
                default={parentFirst}
              />
              <input
                type="text"
                name="parentLast"
                placeholder="Last Name"
                onChange={setFormData}
                default={parentLast}
              />
            </div>
            <div className={styles.parentEmail}>
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={setFormData}
                default={email}
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={setFormData}
                default={password}
              />
            </div>
            <div className={styles.resetPw}>
              <button className={styles.resetBtn}>
                Send Reset Password Link
              </button>
            </div>
          </div>

          <div className={styles.assign}>
            <h3>omWork Assignments</h3>
          </div>
          <div className={styles.products}>
            <h3>Recommended Products</h3>
          </div>
          <div className={styles.saveStudentRow}>
            <div className={styles.sendEmail}>
              <input type="checkbox" name="sendEmail" />
              <label name="sendEmail">Email Parent</label>
            </div>
            <button className={styles.saveBtn} type="submit">
              Save Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateStudentForm;
