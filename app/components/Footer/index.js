import styles from "./styles.module.scss";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa"; // Importa os ícones

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerSection}>
          <h4>Sobre</h4>
          <ul>
            <li>
              <a href="#about">Quem Somos</a>
            </li>
            <li>
              <a href="#mission">Missão</a>
            </li>
            <li>
              <a href="#team">Equipe</a>
            </li>
            <li>
              <a href="#history">História</a>
            </li>
            <li>
              <a href="#careers">Carreiras</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Ajuda</h4>
          <ul>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contate-Nos</a>
            </li>
            <li>
              <a href="#support">Suporte</a>
            </li>
            <li>
              <a href="#returns">Política de Devolução</a>
            </li>
            <li>
              <a href="#shipping">Informações sobre Envio</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Contatos</h4>
          <ul>
            <li>
              <a href="mailto:contato@empresa.com">Email</a>
            </li>
            <li>
              <a href="#feedback">Feedback</a>
            </li>
            <li>
              <a href="#newsletter">Inscreva-se na Newsletter</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Redes Sociais</h4>
          <ul className={styles.socialLinks}>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          © {new Date().getFullYear()} Romano's Barber Shop. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
