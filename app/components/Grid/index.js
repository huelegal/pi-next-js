import styles from "./styles.module.scss";

export default function Index({ images }) {
  return (
    <div className={styles.grid}>
      {images.map((image, index) => (
        <div
          key={index}
          className={styles.item}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
}
