// import React from "react";
// import { useReducer } from "react";
// import AdminSidebar from "../../components/AdminSidebar";
// import styles from "../../styles/AddStudent.module.css";
// import { useQueryClient, useMutation, useQuery } from "react-query";
// import { addNewStudent, getStudents } from "../../lib/helper";

// const addStudent = ({ formData, setFormData }) => {
//   const queryClient = useQueryClient();

//   const addMutation = useMutation(addNewStudent, {
//     onSuccess: () => {
//       queryClient.prefetchQuery("students", getStudents);
//     },
//   });

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (Object.keys(formData).length === 0)
//       return console.log("You don't have any form data!");

//     let {
//       firstName,
//       lastName,
//       parentFirst,
//       parentLast,
//       email,
//       password,
//       homework,
//       products,
//     } = formData;

//     const model = {
//       firstName,
//       lastName,
//       parentFirst,
//       parentLast,
//       email,
//       password,
//       homework,
//       products,
//     };
//     addMutation.mutate(model);
//     console.log(model);
//   };

//   if (addMutation.isLoading) return <div>Loading!</div>;
//   if (addMutation.isError) return <div>{addMutation.error.message}</div>;
//   if (addMutation.isSuccess) return <div>Added Successfully!</div>;

//   return (
//     <div className={styles.container}>
//       <AdminSidebar />
//       <div className={styles.formContainer}>
//         <div className={styles.addForm}>
//           <h2>Add a Student</h2>
//           <form onSubmit={onSubmit}>
//             <h3>Student:</h3>
//             <div className={styles.studentName}>
//               <div className={styles.studentFirst}>
//                 <input
//                   type="text"
//                   name="studentFirst"
//                   placeholder="First Name"
//                   onChange={setFormData}
//                 />
//               </div>
//               <div className={styles.studentLast}>
//                 <input type="text" name="studentLast" placeholder="Last Name" />
//               </div>
//             </div>
//             <div className={styles.parentInfo}>
//               <h3>Parent's Info:</h3>
//               <div className={styles.parentName}>
//                 <input
//                   type="text"
//                   name="parentFirst"
//                   placeholder="First Name"
//                   onChange={setFormData}
//                 />
//                 <input name="parentLast" placeholder="Last Name" />
//               </div>
//               <div className={styles.parentEmail}>
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Email"
//                   onChange={setFormData}
//                 />

//                 <input
//                   name="email"
//                   type="password"
//                   placeholder="Password"
//                   onChange={setFormData}
//                 />
//               </div>
//               <div className={styles.resetPw}>
//                 <button className={styles.resetBtn}>
//                   Send Reset Password Link
//                 </button>
//               </div>
//             </div>

//             <div className={styles.assign}>
//               <h3>omWork Assignments</h3>
//             </div>
//             <div className={styles.products}>
//               <h3>Recommended Products</h3>
//             </div>
//             <div className={styles.saveStudentRow}>
//               <div className={styles.sendEmail}>
//                 <input type="checkbox" name="sendEmail" />
//                 <label name="sendEmail">Email Parent</label>
//               </div>
//               <button className={styles.saveBtn} type="submit">
//                 Save Student
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default addStudent;
