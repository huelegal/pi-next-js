import Button from "../Button";
import styles from "./styles.module.scss";

export default function Home() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Minha App</div>
      <nav className={styles.nav}>
        <a className={styles.link} href="#home">
          Home
        </a>
        <a className={styles.link} href="#about">
          Sobre
        </a>
        <a className={styles.link} href="#services">
          Serviços
        </a>
        <a className={styles.link} href="#contact">
          Contato
        </a>
        <Button text="Entrar" />
      </nav>
    </header>
  );
}
