import React from "react";
import styles from "../styles/OmWorkCard.module.css";

const OmWorkCard = () => {
  return (
    <div className={styles.cardContainer}>
      <h3>Assignment Title</h3>
      <p>Duration: 10 minutes</p>
      <p>Frequency: Twice a week</p>
    </div>
  );
};

export default OmWorkCard;
