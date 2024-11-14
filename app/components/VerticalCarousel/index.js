import React, { useState } from "react";
import styles from "./styles.module.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function VerticalCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Verifica se as imagens são um array e tem pelo menos uma imagem
  if (!Array.isArray(images) || images.length === 0) {
    return <p>Sem imagens para exibir.</p>; // Mensagem alternativa se não houver imagens
  }


  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(images.length - 3, 0) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 3 ? 0 : prevIndex + 1
    );
  };

  // Slice para pegar 3 imagens do array atual
  const currentImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className={styles.carouselContainer}>
      <button onClick={handlePrevious} className={styles.carouselButton}><KeyboardArrowUpIcon/></button>
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
      <button onClick={handleNext} className={styles.carouselButton}><KeyboardArrowDownIcon/></button>
    </div>
  );
}