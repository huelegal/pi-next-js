import ProductCard from "../ProductCard";
import styles from "./styles.module.scss";

// Não precisamos mais declarar os produtos manualmente, pois eles serão gerados dinamicamente
export default function ProductList() {
  return (
    <div className={styles.productList}>
      {Array.from({ length: 20 }).map((_, index) => (
        <ProductCard
          key={index + 1} // Garante que a chave seja única
          product={{
            id: index + 1,
            title: `Produto ${index + 1}`,
            price: 29.99,
            installments: 4,
          }}
        />
      ))}
    </div>
  );
}
