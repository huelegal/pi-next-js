import React, { useState } from "react";
import styles from "./styles.module.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function VerticalCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(1); // Começa a partir da img[1]

  if (!Array.isArray(images) || images.length <= 1) {
    return <p>Sem imagens para exibir.</p>;
  }

  const visibleImages = 3; // Quantidade de imagens visíveis

  // Função auxiliar para manter o índice dentro do intervalo correto (ignorando img[0])
  const getNextIndex = (index) => {
    return index >= images.length - 1 ? 1 : index + 1;
  };

  const getPrevIndex = (index) => {
    return index <= 1 ? images.length - 1 : index - 1;
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => getPrevIndex(prevIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => getNextIndex(prevIndex));
  };

  // Calcula as 3 imagens visíveis a partir do currentIndex
  const currentImages = [
    images[currentIndex],
    images[getNextIndex(currentIndex)],
    images[getNextIndex(getNextIndex(currentIndex))],
  ];

  return (
    <div className={styles.carouselContainer}>
      <button onClick={handlePrevious} className={styles.carouselButton}>
        <KeyboardArrowUpIcon />
      </button>
      <div className={styles.imageContainer}>
        {currentImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagem ${currentIndex + index + 1}`}
            className={styles.carouselImage}
          />
        ))}
      </div>
      <button onClick={handleNext} className={styles.carouselButton}>
        <KeyboardArrowDownIcon />
      </button>
    </div>
  );
}
