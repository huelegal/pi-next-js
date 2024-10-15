import styles from "./styles.module.scss";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.category}>
        <h3>Categorias</h3>
        <ul>
          <li>
            <a href="#">Eletrônicos</a>
          </li>
          <li>
            <a href="#">Roupas</a>
          </li>
          <li>
            <a href="#">Acessórios</a>
          </li>
          <li>
            <a href="#">Promoções</a>
          </li>
        </ul>
      </div>

      <div className={styles.category}>
        <h3>Marca</h3>
        <ul className={styles.checkboxList}>
          <li>
            <label>
              <input type="checkbox" />
              Marca A
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Marca B
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" />
              Marca C
            </label>
          </li>
        </ul>
      </div>

      <div className={styles.category}>
        <h3>Cor</h3>
        <ul>
          <li>
            <a href="#">Vermelho</a>
          </li>
          <li>
            <a href="#">Azul</a>
          </li>
          <li>
            <a href="#">Verde</a>
          </li>
        </ul>
      </div>

      <div className={styles.category}>
        <h3>Tamanho</h3>
        <ul>
          <li>
            <a href="#">P</a>
          </li>
          <li>
            <a href="#">M</a>
          </li>
          <li>
            <a href="#">G</a>
          </li>
          <li>
            <a href="#">GG</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
