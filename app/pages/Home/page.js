"use client";

import CarouselCard from "@/app/components/CarouselCarrd";
import CarouselImage from "@/app/components/CarouselImage";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import styles from "./styles.module.scss";
import Navbar from "@/app/components/NavBar";
import { useEffect, useRef, useState } from "react";

export default function Home() {
   // Estado para armazenar os produtos
   const [products, setProducts] = useState([]);
    // Limpa a lista de produtos antes de fazer a requisição
   
   // Fetch para buscar produtos da API
   useEffect(() => {
     const fetchProducts = async () => {
       try {
         const response = await fetch("http://192.168.43.96:8093/api/products"); // URL da API
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
    <div className={styles.wrapper}>
      <Header isLoggedIn={true} />
      <Navbar/>

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

        <div className={styles.carousel}>
          <CarouselCard products={products} />
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
