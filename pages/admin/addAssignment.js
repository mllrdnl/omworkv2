import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar.jsx";
import FileUploader from "../../components/FileUploader.jsx";
import FormInput from "../../components/FormInput.jsx";
import styles from "../../styles/addAssignment.module.css";
import axios from "axios";

const addAssignment = () => {
  // const [values, setValues] = useState({
  //   title: "",
  //   category: "",
  //   desc: "",
  //   asnmtFile: "",
  // });

  const [title, setTitle] = useState(null);
  const [category, setCategory] = useState(null);
  const [desc, setDesc] = useState(null);
  // const [file, setFile] = useState(null);
  // const [asnmtFile, setAsnmtFile] = useState(null);

  const [error, setError] = useState(null);

  const inputs = [
    {
      id: 1,
      name: "title",
      type: "text",
      placeholder: "Assignment Name",
      errorMessage: "Must include a unique title",
      label: "Assignment Name",
      pattern: "^[A-Za-z0-9]{3,40}$",
      required: true,
    },
    {
      id: 2,
      name: "category",
      type: "text",
      placeholder: "Category",
      errorMessage: "Must include assignment's category",
      label: "Category",
      required: true,
    },
    {
      id: 3,
      name: "desc",
      type: "text",
      placeholder: "Description",
      errorMessage: "Must include a description",
      label: "Description",
      required: true,
    },
    {
      id: 4,
      name: "asnmtFile",
      type: "file",
      placeholder: "File",
      url: "/api/upload",
      errorMessage: "Must attach the assignment's file",
      label: "File",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleCreate();

    // try {
    //   await axios.post("/api/assignments/", values);
    // } catch (e) {
    //   setError(e.message);
    // }
  };
  // const config = {
  //   headers: {
  //     "content-type": "multipart/form-data",
  //   },
  // };

  // const handleCreate = async () => {
  //   const data = new FormData();
  //   data.append("file", file);

  //   try {
  //     const uploadRes = await axios.post("/api/upload", data);

  //     const { url } = uploadRes.data;
  //     const newAssignment = {
  //       title,
  //       category,
  //       desc,
  //       asnmtFile: url,
  //     };
  //     console.log(uploadRes);

  //     await axios.post("/api/assignments", newAssignment, config);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const onChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  return (
    <div className={styles.container}>
      <div className={styles.adminBar}>
        <AdminSidebar />
      </div>

      <div className={styles.formContainer}>
        <h2>Add an Assignment</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formInputs}>
            <label>Title</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className={styles.formInputs}>
            <label>Category</label>
            <input type="text" onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className={styles.formInputs}>
            <label>Description</label>
            <textarea
              rows={4}
              type="text"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          {/* <div className={styles.formInputs}>
            <label>Description</label>
            <input
              name="file"
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div> */}
          {/* {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))} */}

          <FileUploader />

          <button className={styles.submitBtn} type="submit">
            SUBMIT
          </button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default addAssignment;
