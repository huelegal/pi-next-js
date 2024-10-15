import Header from "@/app/components/Header";
import styles from "./styles.module.scss";
import Carousel from "@/app/components/Carousel";
import Footer from "@/app/components/Footer";

export default function Home() {
  const images = [
    "../../public/images/2.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
  ];

  return (
    <>
      <div className={styles.homeContainer}>
        <Header isLoggedIn={true} />
        <nav className={styles.navBar}>{/* links e drop down do navbar */}</nav>

        {/* componentizar esse carouseal caso use ele mais de uma vez */}
        <section className={styles.imageContainer}>
          <h1 style={{ color: "#fff" }}>aqui vai ter um carosel de imagens </h1>
          <image></image>
        </section>
        {/* componentizar o navbar */}
      </div>
      <Footer />
    </>
  );
}
