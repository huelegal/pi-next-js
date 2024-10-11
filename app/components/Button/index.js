import styles from "./styles.module.scss";

export default function Button({ onClick, text, variant }) {
  const buttonClass = styles[variant];

  return (
    <button onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
      {text}
    </button>
  );
}
