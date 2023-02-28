import React, { useState } from "react";
import Upload from "../../components/Upload.jsx";
import { useRouter } from "next/router";
import styles from "../../styles/TempAdd.module.css";
import axios from "axios";

const addTempAsnmt = () => {
  const router = useRouter();
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("category", category);
    formData.append("desc", desc);

    await axios.post("/api/assignments", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    router.push("/admin/library");
  };

  const fileSelected = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={submit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>File</label>
        <input type="file" accept="image/*" onChange={fileSelected} />

        <label>Category</label>
        <input
          type="text"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
        />

        <label>Description</label>
        <input
          type="text"
          name="desc"
          onChange={(e) => setDesc(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default addTempAsnmt;
