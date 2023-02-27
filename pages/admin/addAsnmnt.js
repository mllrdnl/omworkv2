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
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>File upload</label>
          <input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button type="submit">Upload</button>
      </form>

      {file ? (
        <div>
          File uploaded at: {file.name}
          <p>Message</p>
        </div>
      ) : (
        <div>No file uploaded</div>
      )}
    </div>
  );
};

export default addAsnmnt;
