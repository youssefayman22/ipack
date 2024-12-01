import React from "react";
import styles from "./Title.module.css";
import { typeOfHeader } from "../../../constants/userOptionsModel";

export default function Title({ title, type }) {
  return (
    <div className={styles.container}>
      <p
        className={
          type === typeOfHeader.HEADER ? styles.header : styles["sub-header"]
        }
      >
        {title}
      </p>
    </div>
  );
}
