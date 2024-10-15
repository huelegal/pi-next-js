import ProductList from "@/app/components/ProductList";
import Sidebar from "@/app/components/Sidebar";
import styles from "./styles.module.scss";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Products() {
  return (
    <>
      <Header isLoggedIn={true} />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>
          <h1>Lista de Produtos</h1>
          <ProductList />
        </div>
      </div>
      <Footer />
    </>
  );
}
