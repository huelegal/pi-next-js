"use client";

import Header from "@/app/components/Header";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";

export default function ComprasRecentes() {
  const [compras, setCompras] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      // Fazer requisição para pegar as compras do usuário
      fetch(`http://localhost:8093/api/orders/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setCompras(data); // Armazenar as compras
        })
        .catch((error) => {
          console.error("Erro ao buscar compras:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return <div>Carregando compras...</div>;
  }

  return (
    <>
      <Header isLoggedIn={true} />
      <div className={styles.container}>
        {compras.map((compra) => (
          <div className={styles.containerCompras}>
            <div key={compra.id} className={styles.comprasCard}>
              <section className={styles.sectionDadosum}>
                <p>Identificação do pedido: {compra.id}</p>
                <p>
                  Data Compra: {new Date(compra.orderDate).toLocaleString()}
                </p>
              </section>
              <section className={styles.sectionDados}>
                <p>Valor Total: R$ {compra.totalAmount.toFixed(2)}</p>
              </section>
              <div className={styles.containerCardProduct}>
                {compra.items.map((item, index) => (
                  <section key={index} className={styles.cardProduct}>
                    <div className={styles.cardEspecific}>
                      <h1>{item.productName}</h1>
                      <p>Quantidade: {item.quantity}</p>
                      <p>Preço Unitário: {item.unitPrice.toFixed(2)}</p>
                    </div>

                    <img
                      src={item.img}
                      alt={item.productName}
                      className={styles.produtoImagem}
                    />
                  </section>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
