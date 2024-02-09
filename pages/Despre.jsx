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
          
          <h2>Echipa VerificaAnalize.</h2>
          <p>
          Bine ați venit pe VerificaAnalize!
Descoperă o modalitate simplă și eficientă de a-ți monitoriza sănătatea. Cu doar câteva clicuri, poți verifica rezultatele analizelor tale și primi rapoarte personalizate, transformând experiența de interpretare a rezultatelor într-una accesibilă și informativă.
          </p>
          <p>
          Pentru Oricine Își Dorește Control Asupra Sănătății Sale.
VerificaAnalize este platforma perfectă pentru cei care caută un mod convenabil de a monitoriza valorile analizelor lor medicale. Oferim informații clare și concise, astfel încât să poți lua decizii informate pentru binele tău.
          </p>
          <p>
          Interfață Prietenoasă, Informații Complexe Simplificate.
Cu o interfață intuitivă, VerificaAnalize face procesul de verificare a rezultatelor analizelor o experiență plăcută. Informațiile detaliate sunt prezentate într-un mod simplu, astfel încât să fie ușor de înțeles pentru oricine, indiferent de nivelul de cunoștințe medicale.
          </p>
          <p>
          Liniște și Siguranță în Fiecare Rezultat.
Înlocuiește îngrijorarea cu liniștea de a ști că poți verifica starea sănătății tale în orice moment. VerificaAnalize oferă nu doar un instrument, ci și o comunitate de susținere pentru toți cei care își doresc să aibă control asupra propriului bunăstare.
          </p>
          <p>
          Experiența Utilizatorului la Inima Serviciului Nostru.
Cu VerificaAnalize, ne-am concentrat pe crearea unei experiențe de utilizare fără efort. Fiecare aspect al platformei noastre a fost proiectat pentru a face procesul de verificare a rezultatelor analizelor cât mai simplu și accesibil posibil.
          </p>
          <p>
          Soluția Modernă Pentru Monitorizarea Sănătății.
În era tehnologiei, VerificaAnalize aduce împreună inovația și îngrijirea personalizată, oferindu-ți posibilitatea de a-ți monitoriza sănătatea într-un mod modern și eficient. Sănătatea ta, în mâinile tale!
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
