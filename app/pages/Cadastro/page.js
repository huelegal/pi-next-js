"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link"; // Importação do Link para redirecionamento
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

export default function Cadastro({ onClose }) {
  const [name, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null); // Estado para armazenar o retorno HTTP
  const formRef = useRef(null);
  const modalRef = useRef(null); // Ref para o contêiner do modal
  const router = useRouter(); // Instância para redirecionar

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
      const response = await fetch("http://localhost:8093/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json(); // Assume que o backend retorna um JSON com a resposta

      if (response.ok) {
        // Caso o cadastro seja bem-sucedido
        alert("Cadastro bem-sucedido!");
        // Redireciona usando o Link, passando o parâmetro 'success' como query string
        setLoginStatus("success"); // Estado para indicar que o cadastro foi bem-sucedido

        router.push(`./Landing`);
      } else {
        // Caso contrário, exibe a mensagem de erro do backend
        alert(`Erro: ${data.message || "Falha no cadastro"}`);
        setLoginStatus("error"); // Estado para indicar que houve um erro
      }
    } catch (error) {
      console.error(error.message);
      setLoginStatus("error"); // Estado para indicar falha de comunicação
    }
  };

  return (
    <div className={styles.loginContainer} ref={modalRef}>
      <div className={styles.formEimg}>
        <div className={styles.form} ref={formRef}>
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="name">
                Nome
              </label>
              <input
                type="text"
                id="name"
                value={name}
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

      {/* Link de redirecionamento usando query params */}
      {loginStatus === "success" && <Link href="/pages/Home" />}

      {loginStatus === "error" && <Link href="/home?status=error" />}
    </div>
  );
}
