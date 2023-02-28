import { useEffect, useState } from "react";
import styles from "../../styles/addAssignment.module.css";
import axios from "axios";

const addAsnmnt = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState(null);

  const uploadFile = async () => {
    setMessage("uploading!");
    console.log(message);
    try {
      const uploadRes = await axios.post("/api/upload", {
        name: `assignmentFile/${file.name}`,
        type: file.type,
      });

      const url = uploadRes.url;

      await axios.put(url, file, {
        headers: {
          "Content-Type": file.type,
          "Access-Control-Allow-Origin": "*",
        },
      });
      // setFile(null);
      setMessage("file uploaded!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    console.log("file uploaded", file);
  };

  useEffect(() => {
    if (file) {
      const uploadedFileDetail = () => uploadFile();
      uploadedFileDetail();
    }
  }, [file]);

  return (
    <div className={styles.tempContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.tempInput}>
          <label className={styles.tempLabel}>File upload</label>
          <input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className={styles.button}>
          <button type="submit">Upload</button>
        </div>
      </form>

      {file ? (
        <div className={styles.tempMessage}>
          File uploaded at: {file.name}
          <p>Message</p>
        </div>
      ) : (
        <div className={styles.tempMessage}>No file uploaded</div>
      )}
    </div>
  );
};

export default addAsnmnt;
