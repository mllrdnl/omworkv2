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
            <button>Add New</button>
          </div>
        </div>

        <div className={styles.homework}>
          <div className={styles.hw_books}>
            <h3>Book Reading</h3>
            <div className={styles.book_cards}>
              <div className={styles.book_asnmt}>Book</div>
            </div>
          </div>

          <div className={styles.hw_pdfs}>
            <h3>PDFs</h3>
            <div className={styles.pdf_cards}>
              <div className={styles.pdf_asnmt}>PDF</div>
            </div>
          </div>

          <div className={styles.hw_videos}>
            <h3>Videos</h3>
            <div className={styles.video_cards}>
              <div className={styles.video_asnmt}>Video</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default library;
