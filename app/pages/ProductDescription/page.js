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

  // Fetch para buscar produtos da API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:8093/api/products/${id}`
        ); // URL da API
        if (!response.ok) {
          throw new Error("Erro ao buscar produtos");
        }
        const productData = await response.json(); // Armazena a resposta no estado
        setData(productData); // Atualiza o estado
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    if (id) fetchProducts(); // Faz o fetch apenas se o ID existir
  }, [id]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8093/api/products"); // URL da API
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


  return (
    <>
      <Header isLoggedIn={true}/>
      <div className={styles.container}>
        <p className={styles.caminho}>
           {data ? `products / ${data.title}` : "Carregando..."}
        </p>
        <h1>{data ? data.title : "Carregando..."}</h1>
        <div className={styles.containerSections}>
          <section className={styles.containersection1}>
            <div className={styles.section1}>
              <div className={styles.imageContainer}>

              <VerticalCarousel images={products} />{" "}
                <img
                  src={
                    products.img
                  }
                  className={styles.imageProduct}
                />

                <img
                  src={data ? data.img : "Carregando..."}
                  className={styles.imageProduct}
                />
              </div>
              <div className={styles.containerCep}>
                <h3>Consultar frete e prazo de entrega</h3>
                <div className={styles.inputCep}>
                  <input placeholder="Digitar CEP" />
                  <button>OK</button>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.containersection2}>
            <div className={styles.section2}>
              <div className={styles.section2div1}>
                <p>Vendido e entregue por: R.B.S! | Em estoque</p>
                <h1>{data ? "R$"+data.price : "Carregando..."}</h1>
                <p>
                  R$ <strong>{data ? "R$"+data.price : "Carregando..."}</strong>
                  <br />
                  Em até 8x de R$ <strong>{data ? (data.price/8).toFixed(2) : "Carregando..."}</strong> sem juros no cartão
                  <br /> Ou em 1x no cartão com <strong>10% OFF</strong>
                </p>
                <a>Ver mais opções de pagamento</a>
              </div>
              <div className={styles.section2div2}>
                <button> {/*ICONE DE CARRINHO*/} COMPRAR</button>
              </div>
            </div>
            <div className={styles.section22}>
              <h3>Produtos relacionados</h3>
              {/* Carrossel de produtos relacionados */}
              <ProductCarousel products={products} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
