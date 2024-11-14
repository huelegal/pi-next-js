"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

export default function AlterarCadastro({ onClose }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null);
  const formRef = useRef(null);
  const modalRef = useRef(null);
  const router = useRouter();

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

  const handleEmailSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/users/${email}`);
      const data = await response.json();

      if (response.ok) {
        setNome(data.nome);
        setPassword("");
        setIsEditable(true);
        alert("Dados encontrados! Você pode agora editar o nome e a senha.");
      } else {
        alert(`Usuário não encontrado para o email: ${email}`);
      }

      setLoginStatus(response.status);
    } catch (error) {
      alert("Erro ao se comunicar com o servidor");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/users/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Dados atualizados com sucesso!");
        router.push("/pages/Home");
      } else {
        alert(`Erro: ${data.message || "Falha ao atualizar dados"}`);
      }

      setLoginStatus(response.status);
    } catch (error) {
      alert("Erro ao se comunicar com o servidor");
    }
  };

  return (
    <div className={styles.loginContainer} ref={modalRef}>
      <div className={styles.formEimg}>
        <div className={styles.form} ref={formRef}>
          <h2>Alterar Cadastro</h2>
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
              <button
                type="button"
                className={styles.submitButton}
                onClick={handleEmailSearch}
              >
                Buscar
              </button>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="nome">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                disabled={!isEditable}
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Nova Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={!isEditable}
                className={styles.input}
              />
            </div>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={!isEditable}
            >
              Salvar Alterações
            </button>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <button className={styles.closeButton} onClick={onClose}>
            {"x"}
          </button>
          <img src="/images/loginImage.png" alt="Imagem de alteração de cadastro" />
        </div>
      </div>
    </div>
  );
}
