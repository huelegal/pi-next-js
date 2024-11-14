"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

export default function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null); // Estado para armazenar o retorno HTTP
  const formRef = useRef(null);
  const modalRef = useRef(null); // Ref para o contêiner do modal

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8093/api/users/login", {
        // Substitua pela URL da sua API
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Verifica se o tipo de conteúdo da resposta é JSON antes de tentar parseá-lo
      const contentType = response.headers.get("content-type");
      let data;

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text(); // Alternativa para casos de erro em outro formato
      }

      setLoginStatus(response.status); // Armazena o status HTTP
      console.log("Resposta:", data);

      if (response.ok) {
        console.log("Login bem-sucedido");

        // Cria uma string formatada com as informações para o alert
        const userInfo = `
            ID: ${data.id}
            Nome: ${data.name}
            Email: ${data.email}
            Endereço: ${data.address.street}, ${data.address.number}, ${data.address.complement}
            Bairro: ${data.address.neighborhood}
            Cidade: ${data.address.city}
            Estado: ${data.address.state}
            CEP: ${data.address.postalCode}
            País: ${data.address.country}
          `;

        // Exibe um alerta com as informações do usuário
        alert(userInfo);
      } else {
        alert(data);
      }
    } catch (error) {
      alert("Erro nos servidor");
    }
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
                Não possui conta?{" "}
                <Link href="/pages/Cadastro">Crie uma agora!</Link>
              </p>{" "}
              <p>
                Esqueceu a senha?<Link href="/pages/AlterarCadastro"> Recuperar senha </Link>
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
