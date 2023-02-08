import React from "react";
import styles from "../../styles/Library.module.css";

const library = () => {
  return (
    <div className={styles.library_container}>
      <div className={styles.header}>
        <h2>OmWork Assignment Library</h2>
        <div className={styles.btns}>
          <button>Add New</button>
        </div>
      </div>
    </div>
  );
};

export default library;
