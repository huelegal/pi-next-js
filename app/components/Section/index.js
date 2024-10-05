import styles from "./styles.module.scss";

export default function index({ children }) {
  return <section className={styles.section}>{children}</section>;
}
