import React, { useState } from "react";
import styles from "../styles/FileUploader.module.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file selected");

  return (
    <div
      className={styles.uploaderContainer}
      onClick={() => document.querySelector(".fileInput").click()}
    >
      <input
        type="file"
        className="fileInput"
        hidden
        onChange={({ target: { files } }) => {
          files[0] && setFileName(files[0].name);
          if (files) {
            setFile(URL.createObjectURL(files[0]));
          }
        }}
      />

      {file ? (
        <img src={file} width={60} height={60} alt={fileName} />
      ) : (
        <>
          <MdCloudUpload color="#12475cf" size={60} />
          <p>Browse Files to upload</p>
        </>
      )}

      <div className={styles.uploadedRow}>
        <div>
          <AiFillFileImage color="#26303E" />
        </div>
        <div>
          {fileName}
          <MdDelete
            onClick={() => {
              setFileName("No file selected");
              setFile(null);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
