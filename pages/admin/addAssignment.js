import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar.jsx";
import FileUploader from "../../components/FileUploader.jsx";
import FormInput from "../../components/FormInput.jsx";
import styles from "../../styles/addAssignment.module.css";
import axios from "axios";

const addAssignment = () => {
  const [values, setValues] = useState({
    title: "",
    category: "",
    desc: "",
    asnmtFile: "",
  });

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

    if (!file) return;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("desc", desc);
    formData.append("asnmtFile", file);

    console.log(formData);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    try {
      await axios.post("/api/upload", formData, config);
    } catch (e) {
      setError(e.message);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className={styles.container}>
      <div className={styles.adminBar}>
        <AdminSidebar />
      </div>

      <div className={styles.formContainer}>
        <h2>Add an Assignment</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formInputs}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
          </div>
          {/* <FileUploader /> */}

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
