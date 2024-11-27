import Link from "next/link";
import styles from "./styles.module.scss";

export default function ProductCard({ product }) {
  // Extraindo as propriedades do objeto product
  const { id, title, price, img } = product;

  // Calculando o valor de cada parcela
  const installmentValue = (price / 10).toFixed(2);

  return (
    <div className={styles.card}>
      <img src={img[0]} alt={title} className={styles.image} />
      <div className={styles.titulo_estrela}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.rating}>
          {[...Array(5)].map((_, index) => (
            <span key={index} className={styles.star}>
              ★
            </span>
          ))}
        </div>
      </div>
      <div className={styles.description_ps} >
        <p className={styles.description}>A partir de:</p>
        <p className={styles.price}>R$ {price.toFixed(2)}</p>
        <p className={styles.parcel}>ou 10x de R$ {installmentValue}</p>
        <p className={styles.freeShipping}>
          <span className={styles.highlight}>Frete grátis</span>
        </p>
      </div>
      <Link href={`./ProductDescription?id=${id}`} className={styles.addButton}>
        Adicionar ao Carrinho
      </Link>
    </div>
  );
}
