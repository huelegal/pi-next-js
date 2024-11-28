"use client";

import { useState, useEffect } from "react";
import MiniProductCard from "@/app/components/MiniProductCard";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import styles from "./styles.module.scss";

export default function Cart() {
  const [shipping, setShipping] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [products, setProducts] = useState([]); // Inicializando como array vazio
  const [loading, setLoading] = useState(true); // Para controlar o carregamento dos produtos

  // Função para pegar os produtos do carrinho
  const fetchCartItems = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8093/api/cart/${userId}`);
      if (response.ok) {
        const data = await response.json();
        // Verifica se data é um array
        if (Array.isArray(data)) {
          setProducts(data); // Atualiza o estado com os produtos recebidos
        } else {
          console.error("A resposta da API não é um array");
          setProducts([]); // Define como array vazio caso não seja um array
        }
      } else {
        console.error("Erro ao buscar os itens do carrinho");
        setProducts([]); // Caso a requisição falhe, inicializa com array vazio
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setProducts([]); // Caso haja erro, inicializa com array vazio
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  // Efeito para pegar o userId e buscar os itens ao carregar o componente
  useEffect(() => {
    const userId = localStorage.getItem("userId"); // Obtendo o ID do usuário do localStorage
    if (userId) {
      fetchCartItems(userId); // Chama a função para pegar os itens do carrinho
    } else {
      setLoading(false); // Se não houver userId, para o carregamento
    }
  }, []);

  // Funções para manipulação do carrinho
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

  if (loading) {
    return <div>Carregando...</div>; // Exibe um texto de carregamento enquanto os dados não são carregados
  }

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.cart}>
          <div className={styles.productContent}>
            <div className={styles.title}>
              <h1>Carrinho de compras</h1>
              <h1>{products.length} Itens</h1>
            </div>

            <div className={styles.labels}>
              <span>Detalhes do produto</span>
              <span>Quantidade</span>
              <span>Preço</span>
              <span>Total</span>
            </div>

            <div className={styles.productList}>
              {Array.isArray(products) && products.length > 0 ? (
                products.map((product, index) => (
                  <MiniProductCard
                    key={index}
                    details={product.items.title}
                    price={product.price}
                    type={product.type}
                    quantity={product.quantity}
                    onQuantityChange={(newQuantity) =>
                      updateQuantity(index, newQuantity)
                    }
                    onRemove={() => handleRemove(index)}
                  />
                ))
              ) : (
                <div>Sem produtos no carrinho</div>
              )}
            </div>
          </div>

          <div className={styles.sidebar}>
            <h1 className={styles.sideTitle}>Sumário</h1>
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
