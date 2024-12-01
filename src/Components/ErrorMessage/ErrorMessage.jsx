import styles from "./ErrorMessage.module.css";

const ErrorMessage = (props) => {
  return <p className={styles.errorMessage}>{props.errorMessage}</p>;
};

export default ErrorMessage;
