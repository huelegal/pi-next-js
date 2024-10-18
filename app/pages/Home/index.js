import CarouselCard from "@/app/components/CarouselCarrd";
import CarouselImage from "@/app/components/CarouselImage";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from "./styles.module.scss";

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

      <CarouselImage products={products} />

      <div className={styles.content}>
        <h1>Somente o melhor parta sua barba e cabelo.</h1>
        <div className={styles.carousel}>
          <CarouselCard products={products} />
        </div>

        <div className={styles.carousel}>
          <h3>Destaques</h3>
          <CarouselCard products={products} />
        </div>

        <div className={styles.adsContainer}>
          <div className={styles.ad}>
            <img
              src="https://via.placeholder.com/400x200?text=Ad+1"
              alt="Ad 1"
            />
          </div>
          <div className={styles.ad}>
            <img
              src="https://via.placeholder.com/400x200?text=Ad+2"
              alt="Ad 2"
            />
          </div>
        </div>

        <div className={styles.carousel}>
          <h3>Mais procurados</h3>
          <CarouselCard products={products} />
        </div>

        <div className={styles.adsContainer}>
          <div className={styles.ad}>
            <img
              src="https://via.placeholder.com/400x200?text=Ad+1"
              alt="Ad 1"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
