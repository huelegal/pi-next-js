import styles from "./styles.module.scss";

export default function Home() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>Minha App</div>
      <nav className={styles.nav}>
        <a className={styles.navLink} href="#home">
          Home
        </a>
        <a className={styles.navLink} href="#about">
          Sobre
        </a>
        <a className={styles.navLink} href="#services">
          Serviços
        </a>
        <a className={styles.navLink} href="#contact">
          Contato
        </a>
      </nav>
      <div>Redes sociais</div>
    </header>
  );
}
