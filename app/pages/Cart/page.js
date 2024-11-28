"use client";

import MiniProductCard from "@/app/components/MiniProductCard";
import Header from "@/app/components/Header";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Footer from "@/app/components/Footer";
import debounce from "lodash.debounce"; // Importando debounce do lodash

export default function Cart() {
  const [shipping, setShipping] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [cart, setCart] = useState(null); // Agora é um objeto, não um array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      fetchCart(userId);
    }
  }, []);

  const fetchCart = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8093/api/cart/${userId}`);
      const data = await response.json();
      setCart(data); // Atualiza o estado com o objeto do carrinho
    } catch (error) {
      console.error("Erro ao buscar carrinho:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (index) => {
    const userId = localStorage.getItem("userId");
    const productId = cart.items[index].productId;

    if (userId) {
      try {
        const response = await fetch(
          `http://localhost:8093/api/cart/${userId}?productId=${productId}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          console.log("Item removido com sucesso!");
          fetchCart(userId); // Recarrega o carrinho atualizado
        } else {
          console.error("Erro ao remover item do carrinho.");
        }
      } catch (error) {
        console.error("Erro na requisição de remoção:", error);
      }
    }
  };

  const updateQuantity = (index, newQuantity) => {
    const newItems = [...cart.items];
    newItems[index].quantity = newQuantity;
    setCart({ ...cart, items: newItems }); // Atualiza o estado com a nova quantidade

    const userId = localStorage.getItem("userId");
    const productId = newItems[index].productId;

    if (userId) {
      debounceUpdateQuantity(userId, productId, newQuantity);
    }
  };

  const calculateTotal = () => {
    return cart.items
      .reduce(
        (total, product) => total + product.unitPrice * product.quantity,
        0
      )
      .toFixed(2);
  };

  const handleCheckout = async () => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      try {
        // Envia o pedido para a API
        const response = await fetch(
          `http://localhost:8093/api/orders/${userId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              items: cart.items, // Passa os itens do carrinho
              totalAmount: calculateTotal(), // Passa o valor total
              userId: userId, // Passa o ID do usuário
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Erro ao processar o checkout");
        }

        // Após finalizar o pedido, recarrega o carrinho (que estará vazio após a compra)
        fetchCart(userId); // Carrinho atualizado (agora vazio)

        console.log("Compra realizada com sucesso!");
      } catch (error) {
        console.error("Erro ao finalizar compra:", error);
      }
    }
  };

  const updateCartItemAPI = async (userId, productId, quantity) => {
    try {
      const response = await fetch(
        `http://localhost:8093/api/cart/${userId}/update-item/${productId}?quantity=${quantity}`,
        {
          method: "PUT",
        }
      );

      if (response.ok) {
        console.log("Quantidade do produto atualizada com sucesso!");
      } else {
        console.error("Erro ao atualizar quantidade do produto.");
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error);
    }
  };

  const debounceUpdateQuantity = debounce(updateCartItemAPI, 500);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.cart}>
          <div className={styles.productContent}>
            <div className={styles.title}>
              <h1>Carrinho de compras</h1>
              <h1>{cart.items.length} Itens</h1>
            </div>

            <div className={styles.labels}>
              <span>Detalhes do produto</span>
              <span>Quantidade</span>
              <span>Preço</span>
              <span>Total</span>
            </div>

            <div className={styles.productList}>
              {cart.items.map((product, index) => (
                <MiniProductCard
                  key={index}
                  details={product.productName}
                  price={product.unitPrice}
                  image={product.img}
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
            <h1 className={styles.sideTitle}>Sumário</h1>
            <div className={styles.summaryItem}>
              <span>{cart.items.length} itens</span>
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
              <button
                onClick={handleCheckout}
                className={styles.checkoutButton}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
