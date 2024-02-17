import { Link } from "react-router-dom"
import styles from "./Homepage.module.css"
import PageNav from "../components/PageNav";
import { useMediaQuery } from 'react-responsive'
import Footer from "../components/Footer";
import videoBg1 from "../src/assets/videoBg1.mp4"


export default function Homepage() {
  const isTabletOrMobile =useMediaQuery({
    query:'(max-width: 1224px)'})

  return (
    <div>
      <PageNav />
    <main className={styles.homepage}>
      <div className={isTabletOrMobile ? styles.section1 : styles.section1Big}>
      <section className={isTabletOrMobile ? styles.section11 : styles.section1Big1}>
        <h1>
          Monitorizarea sănătății tale în doar câteva clicuri.
        </h1>
        <h2>
          Ne ocupăm să verificăm dacă ai toate analizele în parametrii optimi.
          Tu doar introdu analiza la care dorești să verifici cum stai și noi
          îți oferim toate informațiile de care ai nevoie. 
        </h2>
        <Link to='/Analize' className="cta">
          Verifică analize
        </Link>        
      </section>
           <div>
     <img
         src="doctor_img.png"
         alt="Logo"
         />
     </div> 
         </div>
      <section className={isTabletOrMobile ? styles.features : styles.features_big}>
        <div className={styles.feature}>
          <h1>Suntem aici pentru tine.</h1>
          <h2>Suntem aici pentru a-ți oferi liniștea și siguranța că ești pe drumul 
            cel bun către o stare de sănătate optimă.</h2>
        </div>

        <div className={styles.feature}>
          <h1>Rezultate imediate.</h1>
          <h2>Introdu rezultatele tale și vei primi imediat o evaluare simplă 
            și clară a situației tale de sănătate, pentru fiecare analiză.</h2>
        </div>

        <div className={styles.feature}>
          <h1>Ușor de folosit.</h1>
          <h2>Ne-am asumat misiunea de a face monitorizarea sănătății cât mai accesibilă și ușoară pentru toți. </h2>
        </div>

        <div className={styles.feature}>
          <h1>Hai să începi!</h1>
          <h2>Începe astăzi să îți monitorizezi sănătatea cu VerificaAnalize - pentru că sănătatea ta contează!</h2>
        </div>
      </section>

      <h1>Ce spun utilizatorii noștrii?</h1>
      <section className={styles.testimonials}>
        <div className={styles.testimonial}>
          <blockquote>
            "VerificaAnalize mi-a oferit liniștea de a verifica rapid și eficient rezultatele analizelor mele. Este un instrument esențial pentru oricine vrea să aibă control asupra stării lor de sănătate."
          </blockquote>
          <h2>- Emilia, 27 de ani</h2>
        </div>

        <div className={styles.testimonial}>
          <blockquote>
            "Cu VerificaAnalize, am găsit o modalitate rapidă și simplă de a monitoriza sănătatea mea. Rapoartele personalizate au transformat interpretarea rezultatelor într-o experiență ușoară și informativă."
          </blockquote>
          <h2>- Alex, 24 de ani</h2>
        </div>
      </section>
    </main>
    <Footer />
    </div>
  );
}
