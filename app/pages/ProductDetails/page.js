import { useRouter } from "next/router";
import styles from "./productDetails.module.scss"; // Adicione seu estilo aqui

export default function ProductDetails() {
  const router = useRouter();
  const { id, image, title, desc } = router.query;

  return (
    <div className={styles.container}>
      <h1>Detalhes do Produto</h1>
      <div className={styles.cardDetails}>
        <img src={image} alt={title} className={styles.image} />
        <h2>{title}</h2>
        <p>{desc}</p>
        <p><strong>ID:</strong> {id}</p>
      </div>
    </div>
  );
}