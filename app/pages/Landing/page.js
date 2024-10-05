import Button from "@/app/components/Button";
import Footer from "@/app/components/Footer";
import Grid from "@/app/components/About";
import Services from "@/app/components/Services";
import Header from "../../components/Header";
import styles from "./styles.module.scss";

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
      <Grid />
      <Services />
      <Footer />
    </>
  );
}
