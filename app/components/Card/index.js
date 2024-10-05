import Image from "next/image";
import styles from "./styles.module.scss";

export default function Card({ image, title, desc }) {
  return (
    <div className={styles.card}>
      <Image src={image} width={80} height={80}></Image>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}
