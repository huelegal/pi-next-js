"use client";

import { useState } from "react";
import Login from "../../pages/Login/page"; // Verifique se o caminho está correto
import styles from "./styles.module.scss";
import Button from "../Button";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
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
          <Button onClick={toggleModal} text="Login" variant="buttonInverse" />
        </nav>
      </header>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <Login onClose={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}
