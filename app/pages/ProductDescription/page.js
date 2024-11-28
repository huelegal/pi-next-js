"use client";

import Header from "@/app/components/Header";
import styles from "./styles.module.scss";
import ProductCarousel from "@/app/components/CarouselProduct";
import VerticalCarousel from "@/app/components/VerticalCarousel";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDescription() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Obtém o valor do parâmetro "id"

  const [data, setData] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:8093/api/products/${id}`
        );
        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }
        const productData = await response.json();
        setData(productData);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    if (id) fetchProducts();
  }, [id]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8093/api/products");
        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async () => {
    const userId = localStorage.getItem("userId"); // Obter userId do localStorage
    if (!userId || !data) {
      console.error("Usuário não autenticado ou dados do produto ausentes");
      return;
    }

    const cartItem = {
      productId: data.id,
      productName: data.title,
      unitPrice: data.price,
      img: data.img[0],
      quantity: 1, // Quantidade padrão, pode ser ajustado conforme necessidade
    };

    try {
      const response = await fetch(`http://localhost:8093/api/cart/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      });

      if (response.ok) {
        alert("Produto adicionado ao carrinho com sucesso!");
      } else {
        console.error("Erro ao adicionar produto ao carrinho.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <>
      <Header isLoggedIn={true} />
      <div className={styles.container}>
        <p className={styles.caminho}>
          {data ? `products / ${data.title}` : "Carregando..."}
        </p>
        <h1>{data ? data.title : "Carregando..."}</h1>
        <div className={styles.containerSections}>
          <section className={styles.containersection1}>
            <div className={styles.section1}>
              <div className={styles.imageContainer}>
                <VerticalCarousel images={data ? data.img : []} />
                <img
                  src={data ? data.img[0] : "Carregando..."}
                  className={styles.imageProduct}
                />
              </div>
              {/* <div className={styles.containerCep}>
                <h3>Consultar frete e prazo de entrega</h3>
                <div className={styles.inputCep}>
                  <input placeholder="Digitar CEP" />
                  <button>OK</button>
                </div>
              </div> */}
            </div>
          </section>
          <section className={styles.containersection2}>
            <div className={styles.section2}>
              <div className={styles.section2div1}>
                <p>Vendido e entregue por: R.B.S! | Em estoque</p>
                <h1>
                  {data
                    ? new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(Number(data.price))
                    : "Carregando..."}
                </h1>
                <p>
                  <strong>
                    {data
                      ? new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(Number(data.price))
                      : "Carregando..."}
                  </strong>
                  <br />
                  Em até 8x de R${" "}
                  <strong>
                    {data ? (data.price / 8).toFixed(2) : "Carregando..."}
                  </strong>{" "}
                  sem juros no cartão
                  <br /> Ou em 1x no cartão com <strong>10% OFF</strong>
                </p>
              </div>
              <div className={styles.section2div2}>
                <button onClick={handleAddToCart}>
                  {/* ÍCONE DE CARRINHO */}
                  COMPRAR
                </button>
              </div>
            </div>
            <div className={styles.section22}>
              <h3>Produtos relacionados</h3>
              <ProductCarousel products={products} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
