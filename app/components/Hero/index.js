import Button from "@/app/components/Button";
import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>
      <div className={styles.lead}>
        <h1>Romano's Barber Shop</h1>
        <span>A Barbearia dos Manos</span>
        {/* <Button text="Descabele-se" variant="button-inverse" /> */}
      </div>
    </section>
  );
}
