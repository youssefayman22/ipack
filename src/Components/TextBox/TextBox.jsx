import React, { useState } from "react";
import styles from "./TextBox.module.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

const TextBox = (props) => {
  const [text, setText] = useState(props.defaultValue);

  const handleTextChange = (event) => {
    setText(event.target.value);
    props.onTextChange?.(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      props.onEnterKeyDown?.();
      setText("");
    }
  };

  const getClassName = () => {
    let className = "";
    if (props.isPlaceHolderOpaque) {
      className += styles.textBoxInputOpaque;
    } else {
      className = styles.textBoxInput;
    }
    if (props.iconSrc) {
      className += ` ${styles.textBoxInputWithIcon}`;
    }
    return className;
  };

  return (
    <div className={styles.textBoxContainer}>
      {props.label && (
        <label className={styles.textBoxLabel}>{props.label}</label>
      )}
      <div className={styles.textBoxInputWrapper}>
        {props.iconSrc && (
          <img src={props.iconSrc} alt="icon" className={styles.textBoxIcon} />
        )}
        <input
          className={getClassName(props)}
          placeholder={props.placeHolder}
          value={text}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <ErrorMessage errorMessage={props.errorMessage} />
    </div>
  );
};

export default TextBox;
