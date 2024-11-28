"use client";

import { useEffect, useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa"; // Importando ícones da biblioteca react-icons
import Login from "../../pages/Login/page"; // Verifique se o caminho está correto
import styles from "./styles.module.scss";
import Button from "../Button";
import Link from "next/link";
import { RiLogoutBoxLine } from "react-icons/ri";

export default function Header({ isAbsolute, isLoggedIn, setIsLoggedIn }) {
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

  const handleLogout = () => {
    localStorage.removeItem("userId"); // Remove o ID do usuário
    setIsLoggedIn(false); // Atualiza o estado de login
  };

  return (
    <>
      <header
        className={`${styles.header} ${isAbsolute ? styles.absolute : ""}`}
      >
        <div className={styles.logo}>Minha App</div>

        {isLoggedIn ? (
          <>
            <nav className={styles.nav}>
              <Link href="./Landing" className={styles.iconLink}>
                <RiLogoutBoxLine
                  className={styles.icon}
                  text="Logout"
                  onClick={handleLogout} // Chama a função de logout ao clicar
                  variant="buttonInverse"
                />{" "}
              </Link>
              <Link href="/pages/Cart" className={styles.navLink}>
                <FaShoppingCart className={styles.icon} />{" "}
              </Link>
            </nav>
          </>
        ) : (
          <nav className={styles.nav}>
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
