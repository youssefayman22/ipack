import React from "react";
import styles from "./ChecklistElementLabel.module.css";

export default function Label({ elementLabel }) {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{elementLabel}</span>
    </div>
  );
}
