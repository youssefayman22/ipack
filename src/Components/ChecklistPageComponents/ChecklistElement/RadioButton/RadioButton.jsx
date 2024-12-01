import styles from "./RadioButton.module.css";

export default function RadioButton({ name }) {
  return <input name={name} className={styles.button} type="checkbox" />;
}
