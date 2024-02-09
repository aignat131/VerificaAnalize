import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <main>
      <PageNav />
      <section className={styles.product}>
         <img
         className={styles.img2}
        src="TwoMen.png"
        alt="person with dog overlooking mountain with sunset"
      />
        <div>
          
          <h2>Contact TMD.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
