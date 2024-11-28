"use client"; // Next.js Client Component

import React from "react";
import styles from "./styles.module.scss";

export default function Sidebar({ categories, selectedCategories, setSelectedCategories }) {
  // Função para alternar entre selecionar ou desmarcar a categoria
  const handleCategoryChange = (categoryName) => {
    // Verifica se a categoria já está selecionada
    if (selectedCategories.includes(categoryName)) {
      // Se já estiver selecionada, remove da lista
      setSelectedCategories(selectedCategories.filter((category) => category !== categoryName));
    } else {
      // Caso contrário, adiciona na lista
      setSelectedCategories([...selectedCategories, categoryName]);
    }
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.category}>
        <h3>Categorias</h3>
        <ul>
          {categories.map((category) => (
            <li key={category._id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => handleCategoryChange(category.name)}
                />
                {category.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
