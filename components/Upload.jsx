import styles from "../styles/Upload.module.css";
import axios from "axios";

function Upload() {
  async function uploadToS3(e) {
    const formData = new FormData(e.target);

    const file = formData.get("file");

    if (!file) {
      return null;
    }

    const fileType = file.type;

    const { data } = await axios.get(`/api/upload?fileType=${fileType}`);

    const { url, key } = data;

    await axios.put(url, file);

    return key;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const key = await uploadToS3(e);
  }

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.inputs}>
        <p>Upload a file</p>
        <form onSubmit={handleSubmit}>
          <input type="file" accept="image/jpeg image/png" name="file" />
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
}

export default Upload;
