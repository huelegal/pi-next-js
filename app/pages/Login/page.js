"use client";

import { useRouter } from "next/navigation"; // Para redirecionamento
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

export default function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null); // Para exibir erros no formulário
  const formRef = useRef(null);
  const modalRef = useRef(null); // Ref para o contêiner do modal
  const router = useRouter(); // Instância para redirecionar

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null); // Limpa a mensagem de erro antes do envio
  
    try {
      const response = await fetch("http://localhost:8093/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Login bem-sucedido:", data.email, data.password);
        
        

        // Redireciona para a home
        router.push(`./pages/Home?id=${data.id}`);
      } else {
        // Se o status for 401 (não autorizado) ou outro erro, lida com isso
        const errorData = await response.text(); // Recebe o erro como texto
        setErrorMessage(errorData || "Erro desconhecido"); // Exibe a mensagem de erro
      }
    } catch (error) {
      setErrorMessage("Erro na comunicação com o servidor"); // Mensagem de erro de comunicação
    }
  };
  // Efeito para fechar o modal ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        event.button === 0 &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        onClose();
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
                Esqueceu a senha?
                <Link href="/pages/AlterarCadastro"> Recuperar senha </Link>
              </p>
            </div>
            {errorMessage && (
              <p className={styles.errorMessage}>{errorMessage}</p>
            )}
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
