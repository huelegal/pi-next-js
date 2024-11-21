import styles from "./styles.module.scss";

export default function ProductCard({ product }) {
  // Extraindo as propriedades do objeto product
  const { id, title, price, installMents ,img} = product;

  // Calculando o valor de cada parcela
  const installmentValue = (price / 10).toFixed(2);

  return (
    <div className={styles.card}>
      <img
        src={img} // Usando product.id
        alt={title} // Usando product.title
        className={styles.image}
      />
      <h2 className={styles.title}>{title}</h2> {/* Usando product.title */}
      <div className={styles.rating}>
        {/* Exibe 5 estrelas para avaliação */}
        {[...Array(5)].map((_, index) => (
          <span key={index} className={styles.star}>
            ★
          </span>
        ))}
      </div>
      <p className={styles.description}>A partir de:</p>
      <p className={styles.price}>R$ {price.toFixed(2)}</p>
      <p className={styles.parcel}>
        ou {10}x de R$ {installmentValue}
      </p>
      <p className={styles.freeShipping}>
        <span className={styles.highlight}>Frrete grátis</span>
      </p>
      <button className={styles.addButton}>Adicionar ao Carrinho</button>
    </div>
  );
}
