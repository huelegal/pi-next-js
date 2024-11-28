"use client"; // Next.js Client Component

import ProductCard from "../ProductCard";
import styles from "./styles.module.scss";

export default function ProductList({ products, loading }) {
  return (
    <div className={styles.productList}>
      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )
      )}
    </div>
  );
}