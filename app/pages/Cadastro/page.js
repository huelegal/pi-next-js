"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
 import styles from "./styles.module.scss";
import { useRouter } from "next/router";

export default function Cadastro({ onClose }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null); // Estado para armazenar o retorno HTTP
  const formRef = useRef(null);
  const modalRef = useRef(null); // Ref para o contêiner do modal
  const router = useRouter;

  // Efeito para fechar o modal ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
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

  // Função para enviar o formulário para o backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          password,
        }),
      });

      const data = await response.json(); // Assume que o backend retorna um JSON com a resposta

      if (response.ok) {
        // Caso o login seja bem-sucedido
        alert("Login bem-sucedido!");
        
        // Aqui você pode redirecionar o usuário para uma nova rota
        // Substitua '/home' pela sua rota desejada

        router.push("/pages/Home");  // Rota para onde o usuário será redirecionado

      } else {
        // Caso contrário, exibe a mensagem de erro do backend
        alert(`Erro: ${data.message || "Falha no login"}`);
      }

      setLoginStatus(response.status); // Atualiza o status HTTP
    } catch (error) {
      alert("Erro ao se comunicar com o servidor");
    }
  };

  return (
    <div className={styles.loginContainer} ref={modalRef}>
      <div className={styles.formEimg}>
        <div className={styles.form} ref={formRef}>
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="nome">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                className={styles.input}
              />
            </div>
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

            </div>
            <button type="submit" className={styles.submitButton}>
              Cadastrar
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
