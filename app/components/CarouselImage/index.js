// app/components/CarouselProduct/index.js
"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";

export default function ProductCarousel({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProducts = 5;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleProducts < products.length ? prevIndex + visibleProducts : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - visibleProducts >= 0 ? prevIndex - visibleProducts : products.length - visibleProducts
    );
  };

  const displayedProducts = products.slice(currentIndex, currentIndex + visibleProducts);

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.navButton}>{"<"}</button>
      <div className={styles.productContainer}>
        {displayedProducts.map((product) => (
          <div key={product.id} className={styles.product}>
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className={styles.navButton}>{">"}</button>
    </div>
  );
}
