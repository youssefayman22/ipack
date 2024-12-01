import React from "react";
import styles from "./RadioButtonAndLabelContainer.module.css";

export default function RadioButtonAndLabelContainer({ children }) {
  return <div className={styles.innerContainer}>{children}</div>;
}
