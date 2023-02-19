import React, { useState } from "react";
import styles from "../styles/FormInput.module.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={styles.formInput}>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        // turn back on when done creating layout!
        // onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className={styles.errorMsg}>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
