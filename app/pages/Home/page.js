"use client"; // Adicione isso no início do arquivo

import CarouselCard from "@/app/components/CarouselCarrd";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation"; // Para redirecionamento

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const router = useRouter();
  // Estado para armazenar os produtos
  const [products, setProducts] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchProductsAndCheckAuth = async () => {
      console.log("variavel" + userId);

      if (!userId) {
        router.push("./Landing");
        return; // Sai da função para evitar executar o fetch
      }

      // Busca produtos
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

    fetchProductsAndCheckAuth();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header isLoggedIn={true} />

      <div className={styles.content}>
        <div>
          <h1>Os melhores produtos para sua barba e cabelo</h1>
        </div>
        <h3>Destaques</h3>
        <div className={styles.carousel}>
          <CarouselCard products={products} />
        </div>

        <div className={styles.carousel}>
          <h3>Mais Procurados</h3>
          <CarouselCard products={products} />
        </div>

        <div className={styles.adsContainerContent}>
          <div className={styles.adsContainer}>
            <div className={styles.ad}>
              <img
                src="https://via.placeholder.com/400x200?text=Ad+2"
                alt="Ad 1"
              />
            </div>
            <div className={styles.ad}>
              <img
                src="https://via.placeholder.com/400x200?text=Ad+2"
                alt="Ad 1"
              />
            </div>
            <div className={styles.ad}>
              <img
                src="https://via.placeholder.com/400x200?text=Ad+2"
                alt="Ad 1"
              />
            </div>
            <div className={styles.ad}>
              <img
                src="https://via.placeholder.com/400x200?text=Ad+2"
                alt="Ad 1"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.adsContainer} ${styles.singleContainer}`}>
          <div className={`${styles.ad} ${styles.singleAd}`}>
            <img
              src="https://via.placeholder.com/400x200?text=Ad+1"
              alt="Ad 1"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
