import styles from "./styles.module.scss";

export default function Button({ text, className }) {
  return <button className={`${styles.button} ${className}`}>{text}</button>;
}
