import styles from "./ChecklistElement.module.css";

export default function ChecklistElement({ children }) {
  return <div className={styles.container}>{children}</div>;
}
