"use client";

import { useState } from "react";
import Login from "../../pages/Login/page"; // Verifique se o caminho está correto
import styles from "./styles.module.scss";
import Button from "../Button";

export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleModal = () => {
    if (isModalOpen) {
      closeModal();
    } else {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalOpen(false);
      setIsClosing(false);
    }, 300); // Tempo igual ao da animação de saída
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
        <div
          className={`${styles.modal} ${
            isClosing ? styles.close : styles.open
          }`}
        >
          <div
            className={`${styles.modalContent} ${
              isClosing ? styles.fadeOut : styles.fadeIn
            }`}
          >
            <Login onClose={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}
