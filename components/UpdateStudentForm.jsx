import React from "react";
import { useReducer } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getStudent, getStudents, updateStudent } from "../lib/helper.js";
import styles from "../styles/AddStudent.module.css";

const UpdateStudentForm = () => {
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

  const { name, email, status } = data;
  const [firstName, lastName] = name ? name.split(" ") : formData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    let studentName = `${formData.firstName ?? firstName} ${
      formData.lastName ?? lastName
    }`;
    let updated = Object.assign({}, data, formData, { name: studentName });
    console.log(updated);
    await UpdateMutation.mutate(updated);
  };
  return (
    <div className={styles.formContainer}>
      <div className={styles.addForm}>
        <h2>Update Student</h2>
        <form onSubmit={onSubmit}>
          <h3>Student:</h3>
          <div className={styles.studentName}>
            <div className={styles.studentFirst}>
              <input
                type="text"
                name="studentFirst"
                placeholder="First Name"
                onChange={setFormData}
              />
            </div>
            <div className={styles.studentLast}>
              <input type="text" name="studentLast" placeholder="Last Name" />
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
              />
              <input name="parentLast" placeholder="Last Name" />
            </div>
            <div className={styles.parentEmail}>
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={setFormData}
              />

              <input
                name="email"
                type="password"
                placeholder="Password"
                onChange={setFormData}
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
