// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Contact.module.css";
import React, { useState } from 'react';
import SearchBar from "../components/SearchBar";
import SearchResultsList from "../components/SearchResultsList";
import Footer from "../components/Footer";

export default function Analize() {
  const [results, setResults] = useState([]);
  return (
    <main>
      <PageNav />
      <section className={styles.product}>
        <h2>
          Alegeți din lista de mai jos analiza pe care
          doriți să o interpretăm. 
        </h2>
      </section>
      <div className={styles.product}>
      <div className={styles.App}>
      <div className={styles.searchContainer}>
        <SearchBar setResults={setResults} />
       {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
    </div>
      <section className={styles.product}>
        <div>
          <h2>
            Analize rapide.
            <br />
            Toate intr-un loc.
          </h2>
          <p>
          Bine ați venit pe Verifica Analize  - locul unde verificăm rapid și eficient rezultatele analizelor tale medicale! Simplificăm procesul pentru tine, permițându-ți să introduci și să centralizezi toate analizele tale într-un singur loc comod. Suntem dedicați să asigurăm că fiecare client primește rezultatele corecte și instant.
          </p>
          <p>
          Cu noi, ai acces la un sistem care automatizează verificarea analizelor introduse, confirmând că totul este în regula. Echipa noastră de profesioniști se asigură că informațiile tale de sănătate sunt gestionate într-un mod sigur și confidențial.
          </p>
        </div>
        
      </section>
      <Footer />
    </main>
  );
}
