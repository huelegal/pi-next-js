import Button from "@/app/components/Button";
import Header from "../../components/Header";
import styles from "./styles.module.scss";

export default function Landing() {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <div className={styles.overlay}></div>
        <div className={styles.leadContainer}>
          <h1>Romano's Barber Shop</h1>
          <span>A Barbearia dos Manos</span>
          <Button text="Descabele-se" />
        </div>
      </section>
      <section className={styles.section}>morde meu pé</section>
    </>
  );
}
