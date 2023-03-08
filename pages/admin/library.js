import React from "react";
import AdminSidebar from "../../components/AdminSidebar";

import styles from "../../styles/Library.module.css";

const library = () => {
  return (
    <div className={styles.library_container}>
      <AdminSidebar />
      <div className={styles.body}>
        <div className={styles.header}>
          <h2>OmWork Assignment Library</h2>
          <div className={styles.btns}>
            <div className={styles.addNewBtn}>
              <button>Add New</button>
            </div>
          </div>
        </div>

        <div className={styles.asnmtContainer}></div>
      </div>
    </div>
  );
};

export default library;

// export const getServerSideProps = async () => {
//   const res = await axios.get("http://localhost:3000/api/assignments");
//   return {
//     props: {
//       assignmentList: res.data,
//     },
//   };
// };
