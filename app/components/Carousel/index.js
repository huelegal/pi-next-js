'use client';

import { useState } from "react";
import styles from "./styles.module.scss";


export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= images.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const currentImages = images.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className={styles.carousel}>
    <button onClick={prevSlide} className={styles.prevButton}>
      &#10094;
    </button>
    <div className={styles.imageWrapper}>
      {currentImages.map((image, index) => (
        <img key={index} src={image} alt={`Slide ${currentIndex + index + 1}`} />
      ))}
    </div>
    <button onClick={nextSlide} className={styles.nextButton}>
      &#10095;
    </button>
  </div>

  );
}
