import Section from "../Section";
import styles from "./styles.module.scss";

export default function About() {
  const images = [
    "/images/1.webp",
    "/images/6.webp",

    "/images/3.jpg",
    "/images/4.jpg",
    // "/images/5.webp",
    // "/images/6.webp",
  ];

  return (
    <Section className="services">
      <div className={styles.aboutSection}>
        <div  className={styles.aboutText}>
          <h1>Sobre Nós</h1>
          <p className={styles.text}>
            Bem-vindo à Romanos BarberShop, onde tradição e estilo se encontram.
            Nossa equipe de barbeiros apaixonados oferece cortes e cuidados
            personalizados, combinando técnicas clássicas e modernas em um
            ambiente acolhedor. <br />
            <br />
            Aqui, cada cliente é tratado como parte da família, com serviços que
            vão desde cortes de cabelo até tratamentos especiais para a barba,
            sempre acompanhados de um café fresco ou uma cerveja gelada. <br />
            <br />
            Venha nos visitar e descubra por que somos mais do que uma barbearia
            – somos um espaço de estilo e camaradagem.
          </p>
        </div>

        <div className={styles.grid}>
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.item}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>
    </Section>
  );
}
