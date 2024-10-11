"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef(null);
  const modalRef = useRef(null); // Ref para o contêiner do modal

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  // Efeito para fechar o modal ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Verifica se o clique foi do botão esquerdo (0)
      if (
        event.button === 0 &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        onClose(); // Fecha o modal
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.loginContainer} ref={modalRef}>
      <div className={styles.formEimg}>
        <div className={styles.form} ref={formRef}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={styles.input}
              />
              <div className={styles.inputCheckBoxContainer}>
                <input type="checkbox" />
                <label className={styles.labelCheckbox}>Lembrar Senha</label>
              </div>
              <p>
                Não possui conta? <Link href="/register">Cadastrar</Link>
              </p>
            </div>
            <button type="submit" className={styles.submitButton}>
              Entrar
            </button>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <button className={styles.closeButton} onClick={onClose}>
            {"x"}
          </button>
          <img src="/images/loginImage.png" alt="Imagem de login" />
        </div>
      </div>
    </div>
  );
}
