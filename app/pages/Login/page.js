"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formEimg}>
        <div className={styles.form}>
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
                className={styles.input} // Adicionando uma classe para os inputs
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
                className={styles.input} // Adicionando uma classe para os inputs
              />
              <div className={styles.inputCheckBoxContainer}>
                <input type="checkbox"></input>
                <label className={styles.labelCheckbox}>Lembrar Senha</label>
              </div>
              <p>
                Não possui conta? <a> Cadastrar</a>
              </p>
            </div>
            <button type="submit" className={styles.submitButton}>
              Entrar
            </button>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <img src="/images/loginImage.png" alt="Imagem de login" />
        </div>
      </div>
    </div>
  );
}
