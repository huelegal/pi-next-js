"use client";

import styles from "./styles.module.scss";

export default function MiniProductCard({
  details,
  price,
  image,
  type,
  quantity,
  onQuantityChange,
  onRemove,
}) {
  const total = (price * quantity).toFixed(2);

  const handleIncrement = () => onQuantityChange(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) onQuantityChange(quantity - 1);
  };

  const placeholderImage =
    "https://pbs.twimg.com/media/DNJ17JJWkAA7GNe.jpg:large"; // Você pode ajustar o tamanho

  return (
    <div className={styles.productCard}>
      <div className={styles.productInfo}>
        <img
          src={image || placeholderImage}
          alt={details}
          className={styles.productImage}
        />
        <div>
          <span className={styles.details}>{details}</span>
          <span className={styles.type}>{type}</span>
          <button className={styles.removeButton} onClick={onRemove}>
            Remover
          </button>
        </div>
      </div>

      <div className={styles.quantity}>
        <button onClick={handleDecrement} className={styles.controlButton}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={handleIncrement} className={styles.controlButton}>
          +
        </button>
      </div>

      <span className={styles.price}>R${price.toFixed(2)}</span>
      <span className={styles.total}>R${total}</span>
    </div>
  );
}
