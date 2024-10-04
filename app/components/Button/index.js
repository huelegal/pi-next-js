import styles from "./styles.module.scss";

export default function Button({ text, variant }) {
  const buttonClass = styles[variant];

  return (
    <button className={`${styles.button} ${styles[variant]}`}>{text}</button>
  );
}
