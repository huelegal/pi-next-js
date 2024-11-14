"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss"; // Importe seu arquivo de estilos
import Link from "next/link";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <div className={styles.dropdown}>
            <button onClick={toggleDropdown} className={styles.dropbtn}>
              Mais
            </button>
            {dropdownOpen && (
              <div className={styles.dropdownContent}>
                <a href="/contact" className={styles.dropdownLink}>
                  Contato
                </a>
                <a href="/faq" className={styles.dropdownLink}>
                  FAQ
                </a>
                <a href="/support" className={styles.dropdownLink}>
                  Suporte
                </a>
              </div>
            )}
          </div>
        </li>
        <li className={styles.navItem}>
          <Link href="/pages/Home" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/pages/Products" className={styles.navLink}>
            Produtos
          </Link>
        </li>
        <li className={styles.navItem}>
          <a href="/about" className={styles.navLink}>
            Sobre
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
