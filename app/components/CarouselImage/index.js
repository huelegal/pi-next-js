"use client";

import { useState } from "react";
import styles from "./styles.module.scss";

export default function CarouselImage({ products, customStyles }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel} style={customStyles}>
      <div className={styles.cardContainer}>
        <div
          className={styles.imageContainer}
          style={{
            backgroundImage: `url(https://picsum.photos/800/400?random=${products[currentIndex].id})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "400px",
            width: "100%",
            transition: "background-image 0.5s ease-in-out", // Adicionando transição
          }}
          aria-label={products[currentIndex].title} // Acessibilidade
        />
      </div>
      <div className={styles.indicators}>
        {products.map((_, index) => (
          <div
            key={index}
            className={`${styles.indicator} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)} // Alterar a imagem ao clicar no indicador
          />
        ))}
      </div>
    </div>
  );
}
