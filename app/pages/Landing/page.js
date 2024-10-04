import Button from "@/app/components/Button";
import Image from "next/image";
import Header from "../../components/Header";
import styles from "./styles.module.scss";

export default function Landing() {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <div className={styles.overlay}></div>
        <div className={styles.lead}>
          <h1>Romano's Barber Shop</h1>
          <span>A Barbearia dos Manos</span>
          <Button text="Descabele-se" variant="button-inverse" />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/barber.jpg"
              alt="Imagem de teste"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.textContainer}>
            <p>
              Lorem ipsum dolor sit amet. In quaerat exercitationem aut
              voluptatem alias sit fugiat rerum est vitae Quis qui
              necessitatibus quos qui voluptatem doloremque. Ut eaque nobis est
              sapiente inventore aut aliquam nihil non earum praesentium et
              porro unde. Non ipsum nesciunt non accusantium labore est deleniti
              obcaecati est unde quis quo sint sint. Ut repellendus officiis eos
              sapiente placeat At pariatur repellat et provident explicabo et
              illo temporibus. Eos animi voluptates aut sequi totam aut
              laudantium quia ad molestias impedit et nostrum cumque et alias
              vitae sit quod nihil. Est enim nihil est facilis illo ut alias
              molestiae. Qui placeat inventore qui eius nobis et libero dicta ea
              fugit quam ut rerum reiciendis? Ut saepe repudiandae qui dolore
              enim ut unde aperiam et alias vitae est voluptate reiciendis et
              consequuntur harum qui suscipit tenetur! Id incidunt voluptatum
              est saepe ratione et illo accusamus aut natus galisum est nulla
              consequatur est nisi illum et vero obcaecati.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
