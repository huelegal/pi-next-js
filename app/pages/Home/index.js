import Carousel from "@/app/components/CardCarousel";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from "./styles.module.scss";
import CardCarousel from "@/app/components/CardCarousel";
import ImageCarousel from "@/app/components/ImageCarousel";

export default function Home() {
  const products = [
    { id: 1, title: "Produto 1", price: 100.0, installments: 3 },
    { id: 2, title: "Produto 2", price: 200.0, installments: 5 },
    { id: 3, title: "Produto 3", price: 150.0, installments: 4 },
    { id: 4, title: "Produto 4", price: 80.0, installments: 2 },
    { id: 5, title: "Produto 5", price: 120.0, installments: 6 },
    { id: 6, title: "Produto 6", price: 300.0, installments: 10 },
  ];

  return (
    <>
      <Header isLoggedIn={true} />
      <nav className={styles.navBar}>{/* links e drop down do navbar */}</nav>

      {/* Carousel de imagens */}
      <ImageCarousel products={products} />

      {/* Carousel de cards */}
      <CardCarousel products={products} />

      {/* componentizar o navbar */}
      <Footer />
    </>
  );
}
