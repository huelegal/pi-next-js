"use client";

import MiniProductCard from "@/app/components/MiniProductCard";
import styles from "./styles.module.scss";
import { useState } from "react";

export default function Cart() {
  const [shipping, setShipping] = useState("");
  const [promoCode, setPromoCode] = useState("");

  const [products, setProducts] = useState([
    { details: "Produto 1", price: 10.0, type: "Tipo A", quantity: 1 },
    { details: "Produto 2", price: 15.0, type: "Tipo B", quantity: 1 },
  ]);

  const handleRemove = (index) => {
    const newProducts = products.filter((_, i) => i !== index);
    setProducts(newProducts);
  };

  const updateQuantity = (index, newQuantity) => {
    const newProducts = [...products];
    newProducts[index].quantity = newQuantity;
    setProducts(newProducts);
  };

  const calculateTotal = () => {
    return products
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    console.log("Checkout iniciado");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cart}>
        <div className={styles.productContent}>
          <div className={styles.title}>
            <h1>Carrinho de compras</h1>
            <h1>{products.length} itens</h1>
          </div>

          <div className={styles.labels}>
            <span>Detalhes do produto</span>
            <span>Quantidade</span>
            <span>Preço</span>
            <span>Total</span>
          </div>

          <div className={styles.productList}>
            {products.map((product, index) => (
              <MiniProductCard
                key={index}
                details={product.details}
                price={product.price}
                type={product.type}
                quantity={product.quantity}
                onQuantityChange={(newQuantity) =>
                  updateQuantity(index, newQuantity)
                }
                onRemove={() => handleRemove(index)}
              />
            ))}
          </div>
        </div>

        <div className={styles.sidebar}>
          <h2>Resumo da compra</h2>
          <div className={styles.summaryItem}>
            <span>{products.length} itens</span>
            <span>R$ {calculateTotal()}</span>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="shipping">Transportadora:</label>
            <select
              id="shipping"
              value={shipping}
              onChange={(e) => setShipping(e.target.value)}
            >
              <option value="Transportadora A">Transportadora A</option>
              <option value="Transportadora B">Transportadora B</option>
              <option value="Transportadora C">Transportadora C</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="promoCode">Código promocional:</label>
            <input
              type="text"
              id="promoCode"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Digite seu código"
            />
          </div>

          <div className={styles.totalCheckout}>
            <h3>Total: R$ {calculateTotal()}</h3>
            <button onClick={handleCheckout} className={styles.checkoutButton}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
