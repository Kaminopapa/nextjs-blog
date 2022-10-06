import React from "react";
import styles from "./alert.module.scss";
const Alert = ({ children, type }) => {
  return (
    <div className={type === "success" ? styles.success : styles.error}>
      {children}
    </div>
  );
};

export default Alert;
