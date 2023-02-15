import React from "react";
import styles from "../styles/HwLibCard.module.css";

const HwLibCard = ({ asnmt }) => {
  return (
    <div className={styles.container}>
      <div className={styles.displayCard}>
        <div className={styles.cardPic}>Picture!</div>
        <h3>{asnmt.title}</h3>
        <div className={styles.cardInfo}>
          <div>Icon</div>
          <div>Date Added</div>
        </div>
      </div>
    </div>
  );
};

export default HwLibCard;
