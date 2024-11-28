"use client"; // Adicione isso no início do arquivo

import React, { useState, useEffect } from "react";
import ProductList from "@/app/components/ProductList";
import Sidebar from "@/app/components/Sidebar";
import styles from "./styles.module.scss";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Products() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]); // Estado para os produtos filtrados
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [selectedCategories, setSelectedCategories] = useState([]); // Categorias selecionadas

  // Carregar as categorias
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:8093/api/categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };

    fetchCategories();
  }, []);

  // Buscar produtos com base nas categorias selecionadas
  useEffect(() => {
    const fetchProducts = async () => {
      // Se não houver categorias selecionadas, traz todos os produtos
      const url = selectedCategories.length
        ? `http://localhost:8093/api/products/category?category=${selectedCategories.join(",")}`
        : "http://localhost:8093/api/products"; // Sem filtro se não houver categoria
      setLoading(true); // Inicia o carregamento
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchProducts();
  }, [selectedCategories]); // Recarregar os produtos toda vez que a categoria mudar

  return (
    <>
      <Header isLoggedIn={true} />
      <div className={styles.container}>
        <Sidebar
          categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <div className={styles.content}>
          <h1>Lista de Produtos</h1>
          <ProductList products={products} loading={loading} />
        </div>
      </div>
      <Footer />
    </>
  );
}
