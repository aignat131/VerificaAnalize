import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";
import { useMediaQuery } from "react-responsive";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBoltLightning,
  faHeart,
  faFeather,
} from "@fortawesome/free-solid-svg-icons";

export default function Homepage() {
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1224px)",
  });

  return (
    <div>
      <PageNav />
      <main className={styles.homepage}>
        <div
          className={isTabletOrMobile ? styles.section1 : styles.section1Big}
        >
          <section
            className={
              isTabletOrMobile ? styles.section11 : styles.section1Big1
            }
          >
            <h1>Monitorizarea sănătății tale în doar câteva clicuri.</h1>
            <h2>
              Ne ocupăm să verificăm dacă ai toate analizele în parametrii
              optimi. Tu doar introdu analiza la care dorești să verifici cum
              stai și noi îți oferim toate informațiile de care ai nevoie.
            </h2>
            <Link to="/Analize" className="cta">
              Verifică analize
            </Link>
          </section>
          <div>
            <img src="doctor_img.png" alt="Logo" />
          </div>
        </div>

        <section
          className={isTabletOrMobile ? styles.features : styles.features_big}
        >
          <div className={styles.feature}>
            <FontAwesomeIcon icon={faHeart} className={styles.icons} />
            <h2>Suntem aici pentru tine.</h2>
            <p>
              Suntem aici pentru a-ți oferi liniștea și siguranța că ești pe
              drumul cel bun către o stare de sănătate optimă.
            </p>
          </div>

          <div className={styles.feature}>
            <FontAwesomeIcon icon={faBoltLightning} className={styles.icons} />
            <h2>Rezultate imediate.</h2>
            <p>
              Introdu rezultatele tale și vei primi imediat o evaluare simplă și
              clară a situației tale de sănătate, pentru fiecare analiză.
            </p>
          </div>

          <div className={styles.feature}>
            <FontAwesomeIcon icon={faFeather} className={styles.icons} />
            <h2>Ușor de folosit.</h2>
            <p>
              Ne-am asumat misiunea de a face monitorizarea sănătății cât mai
              accesibilă și ușoară pentru toți.{" "}
            </p>
          </div>

          <div className={styles.feature}>
            <FontAwesomeIcon icon={faStar} className={styles.icons} />
            <h2>Hai să începi!</h2>
            <p>
              Începe astăzi să îți monitorizezi sănătatea cu VerificaAnalize -
              pentru că sănătatea ta contează!
            </p>
          </div>
        </section>

        <h1 className={styles.txt}>
          Ce părere au utilizatorii despre platformă noastră?
        </h1>
        <section className={styles.testimonials}>
          <div className={styles.testimonial}>
            <img src="woman.png" alt="woman" className={styles.imgt} />
            <blockquote>
              "VerificaAnalize mi-a oferit liniștea de a verifica rapid și
              eficient rezultatele analizelor mele. Este un instrument esențial
              pentru oricine vrea să aibă control asupra stării lor de
              sănătate."
            </blockquote>
            <h2>- Emilia, 27 de ani</h2>
          </div>

          <div className={styles.testimonial}>
            <img src="man.png" alt="man" className={styles.imgt} />
            <blockquote>
              "Cu VerificaAnalize, am găsit o modalitate rapidă și simplă de a
              monitoriza sănătatea mea. Rapoartele personalizate au transformat
              interpretarea rezultatelor într-o experiență ușoară și
              informativă."
            </blockquote>
            <h2>- Alex, 24 de ani</h2>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
