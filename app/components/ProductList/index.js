import ProductCard from "../ProductCard";
import styles from "./styles.module.scss";

const products = [
  {
    id: 1,
    title: "Produto 1",
    price: 29.99,
    installments: 4, // Número de parcelas
  },
  {
    id: 2,
    title: "Produto 2",
    price: 49.99,
    installments: 5,
  },
  {
    id: 3,
    title: "Produto 3",
    price: 19.99,
    installments: 3,
  },
  {
    id: 4,
    title: "Produto 4",
    price: 39.99,
    installments: 6,
  },
  // Adicione mais produtos conforme necessário
];

export default function ProductList() {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
