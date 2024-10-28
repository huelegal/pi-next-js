"use client";

import Header from "@/app/components/Header";
import styles from "./styles.module.scss";
import ProductCarousel from "@/app/components/CarouselProduct";

export default function ProductDescription() {
  const relatedProducts = [
    { id: 1, image: "/images/teste.png" },
    {
      id: 2,
      image:
        "/images/gel-fixador-condicionante-acao-prolongad-300x615x-71388.png",
    },
    { id: 1, image: "/images/teste.png" },
    {
      id: 2,
      image:
        "/images/gel-fixador-condicionante-acao-prolongad-300x615x-71388.png",
    },
    { id: 1, image: "/images/teste.png" },
    {
      id: 2,
      image:
        "/images/gel-fixador-condicionante-acao-prolongad-300x615x-71388.png",
    },
    { id: 1, image: "/images/teste.png" },
    {
      id: 2,
      image:
        "/images/gel-fixador-condicionante-acao-prolongad-300x615x-71388.png",
    },
    { id: 1, image: "/images/teste.png" },
    {
      id: 2,
      image:
        "/images/gel-fixador-condicionante-acao-prolongad-300x615x-71388.png",
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.container}>
        <p className={styles.caminho}>
          Você está em: Periféricos / Cabos e Adaptadores Cabos VGA / Código:
          483251
        </p>
        <h1>
          Placa de Video RTX 3060 Palit NVIDIA GeForce, 12GB GDDR6, RGB, DLSS,
          G-Sync, Ray Tracing - NE63060019K9-190AD
        </h1>
        <div className={styles.containerSections}>
          <section className={styles.containersection1}>
            <div className={styles.section1}>
              <div className={styles.imageContainer}>
                <img
                  src={
                    "/images/gel-fixador-condicionante-acao-prolongad-300x615x-71388.png"
                  }
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
                <h1>R$ 1.659,99</h1>
                <p>
                  R$ <strong>223,52</strong>
                  <br />
                  Em até 8x de R$ <strong>27,94</strong> sem juros no cartão
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
              <ProductCarousel products={relatedProducts} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
