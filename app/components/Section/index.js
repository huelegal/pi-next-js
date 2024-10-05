import styles from "./styles.module.scss";

export default function Section({ children, className }) {
  return (
    <section className={`${styles.section} ${styles[className] || ""}`}>
      {children}
    </section>
  );
}
