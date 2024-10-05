import Button from "@/app/components/Button";
import About from "../../components/About";
import Header from "../../components/Header";
import styles from "./styles.module.scss";
import Footer from "@/app/components/Footer";
import Services from "@/app/components/Services";

export default function Landing() {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <div className={styles.overlay}></div>
        <div className={styles.lead}>
          <h1>Romano's Barber Shop</h1>
          <span>A Barbearia dos Manos</span>
          <Button text="Descabele-se" variant="button-inverse" />
        </div>
      </section>
      <About />
      <Services />
      <Footer />
    </>
  );
}
