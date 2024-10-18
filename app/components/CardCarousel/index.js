// CardCarousel.js
"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import ProductCard from "@/app/components/ProductCard"; // Importe o ProductCard

export default function CardCarousel({ products, customStyles }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const getVisibleProducts = () => {
    return products
      .slice(currentIndex, currentIndex + 5)
      .concat(
        products.slice(0, Math.max(0, currentIndex + 5 - products.length))
      );
  };

  return (
    <div className={styles.carousel} style={customStyles}>
      <button onClick={prevSlide} className={styles.button}>
        ❮
      </button>
      <div className={styles.cardContainer}>
        {getVisibleProducts().map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button onClick={nextSlide} className={styles.button}>
        ❯
      </button>
    </div>
  );
}
