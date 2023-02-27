import React, { useEffect, useState } from "react";
import styles from "../styles/FileUploader.module.css";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import axios from "axios";

export default function FileUploader() {
  const [file, setFile] = useState(null);
  // const [fileName, setFileName] = useState("No file selected");

  // const selectFile = (e) => {
  //     setFile(e.target.files[0]);
  //   };
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const uploadFile = async () => {
    try {
      const { data } = await axios.post(
        "/api/upload",
        {
          name: file.name,
          type: file.type,
        },
        config
      );

      const url = data.url;
      await axios.put(url, file, {
        headers: {
          "Content-Type": file.type,
          "Access-Control-Allow-Origin": "*",
        },
      });
      console.log(data);
      setFile(null);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    if (file) {
      const uploadedFileDetail = () => uploadFile();
      uploadedFileDetail();
    }
  }, [file]);

  return (
    <div
      className={styles.uploaderContainer}
      onClick={() => document.querySelector(".fileInput").click()}
    >
      <input
        type="file"
        className="fileInput"
        hidden
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />

      {/* {file ? (
        <img src={file} width={60} height={60} alt={file} />
      ) : (
        <>
          <MdCloudUpload color="#12475cf" size={60} />
          <p>Browse Files to upload</p>
        </>
      )} */}

      {/* <div className={styles.uploadedRow}>
        <div>
          <AiFillFileImage color="#26303E" />
        </div>
        <div>
          {file}
          <MdDelete
            onClick={() => {
              setFile(null);
            }}
          />
        </div>
      </div> */}
    </div>
  );
}
