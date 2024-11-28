import Header from "@/app/components/Header";
import styles from "./styles.module.scss";

export default function ComprasRecentes(params) {
  return (
    <>
      <Header isLoggedIn={true} />
      <div className={styles.container}>
        {/* Fazer um map em todas as compras do banco de dados */}
        <div className={styles.containerCompras}>
          <section className={styles.sectionDados}>Numero do pedido: </section>
          <section className={styles.sectionDados}>Valor Total: </section>
          <div className={styles.containerCardProduct}>
            {/* essa section tem q ser tipo um card pra mostrar os produtos de cada compra */}
            <section className={styles.cardProduct}>
              {" "}
              <img src="public/images/gel-fixador-condicionante-acao-prolongad-300x615x-71388.png"></img>
              <div className={styles.cardEspecific}>
                <h1>Nome do produto</h1>
                <p>Quantidade</p>
              </div>
            </section>
            <section className={styles.cardProduct}>
              {" "}
              <img src="public/images/gel-fixador-condicionante-acao-prolongad-300x615x-71388.png"></img>
              <div>
                <h1>Nome do produto</h1>
                <p>Quantidade</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
