"use client";

import { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa"; // Importando ícones da biblioteca react-icons
import Login from "../../pages/Login/page"; // Verifique se o caminho está correto
import styles from "./styles.module.scss";
import Button from "../Button";

export default function Header({ isAbsolute, isLoggedIn }) {
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
      <header
        className={`${styles.header} ${isAbsolute ? styles.absolute : ""}`}
      >
        <div className={styles.logo}>Minha App</div>

        {isLoggedIn ? (
          <>
            <input
              type="text"
              placeholder="Buscar..."
              className={styles.searchInput} // Estilo da barra de busca
            />
            <nav className={styles.nav}>
              <FaUser className={styles.icon} /> {/* Ícone de usuário */}
              <FaShoppingCart className={styles.icon} />{" "}
              {/* Ícone de carrinho */}
            </nav>
          </>
        ) : (
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
            <Button
              onClick={toggleModal}
              text="Login"
              variant="buttonInverse"
            />
          </nav>
        )}
      </header>

      {isModalOpen && (
        <div
          className={`${styles.modal} ${isClosing ? styles.close : styles.open
            }`}
        >
          <div
            className={`${styles.modalContent} ${isClosing ? styles.fadeOut : styles.fadeIn
              }`}
          >
            <Login onClose={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}
