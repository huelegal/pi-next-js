// app/components/CarouselProduct/index.js
"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";

export default function ProductCarousel({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProducts = 5; // número de produtos visíveis de uma vez

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleProducts < products.length ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : products.length - visibleProducts
    );
  };

  // Calcula os produtos visíveis com base no índice atual
  const displayedProducts = products.slice(
    currentIndex,
    currentIndex + visibleProducts
  );

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.navButton}>{"<"}</button>
      <div className={styles.productContainer}>
        {displayedProducts.map((product, index) => (
          <div key={index} className={styles.product}>
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className={styles.navButton}>{">"}</button>
    </div>
  );
}
