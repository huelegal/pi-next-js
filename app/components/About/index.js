import Section from "../Section";
import styles from "./styles.module.scss";

export default function About() {
  const images = [
    "/images/1.webp",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.webp",
    "/images/6.webp",
  ];

  return (
    <Section>
      <h1>Sobre Nós</h1>
      <p className={styles.text}>
        Bem-vindo à [Nome da Barbearia], onde tradição e estilo se encontram.
        Nossa equipe de barbeiros apaixonados oferece cortes e cuidados
        personalizados, combinando técnicas clássicas e modernas em um ambiente
        acolhedor. Aqui, cada cliente é tratado como parte da família, com
        serviços que vão desde cortes de cabelo até tratamentos especiais para a
        barba, sempre acompanhados de um café fresco ou uma cerveja gelada.
        Venha nos visitar e descubra por que somos mais do que uma barbearia –
        somos um espaço de estilo e camaradagem.
      </p>
      <div className={styles.grid}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.item}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </Section>
  );
}
