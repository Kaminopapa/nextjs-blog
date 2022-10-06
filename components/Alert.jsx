import React from "react";
import styles from "./alert.module.scss";
const Alert = ({ children, type }) => {
  return (
    <div className={type === "success" ? styles.success : styles.error}>
      <h1 className={styles.title}>hello</h1>
      {children}
    </div>
  );
};

export default Alert;
