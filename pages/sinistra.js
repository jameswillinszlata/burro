// pages/sinistra.js
'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"; // Importa useState e useEffect per la gestione del timer
import styles from '../styles/Home.module.css';

export default function Sinistra() {
  const [isImageVisible, setIsImageVisible] = useState(true); // Stato per mostrare l'immagine animata
  const [showScippato, setShowScippato] = useState(false); // Stato per mostrare l'immagine finale

  // Carica i suoni
  const soundAnimata = new Audio('/spavento.mp3'); // Suono per l'immagine animata
  const soundFinale = new Audio('/haram.mp3'); // Suono per l'immagine finale

  useEffect(() => {
    // Riproduce il suono dell'immagine animata quando la pagina viene caricata
    soundAnimata.play();

    // Mostra l'immagine animata per 3 secondi e poi sostituiscila con l'immagine finale
    const timer = setTimeout(() => {
      setIsImageVisible(false); // Nascondi l'immagine animata
      setShowScippato(true); // Mostra l'immagine finale

      // Ferma il suono dell'immagine animata e avvia il suono finale
      soundAnimata.pause();
      soundAnimata.currentTime = 0; // Resetta il suono animato
      soundFinale.play(); // Riproduce il suono finale
    }, 3000); // 3 secondi

    // Funzione di pulizia per fermare i suoni quando si lascia la pagina
    const stopAudio = () => {
      soundAnimata.pause();
      soundAnimata.currentTime = 0;
      soundFinale.pause();
      soundFinale.currentTime = 0;
    };

    // Aggiungi l'event listener per fermare il suono quando l'utente lascia la pagina
    window.addEventListener('beforeunload', stopAudio);

    // Pulisce il timer quando il componente viene smontato
    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeunload', stopAudio);
      soundAnimata.pause();  // Ferma il suono animato
      soundAnimata.currentTime = 0;
      soundFinale.pause(); // Ferma il suono finale
      soundFinale.currentTime = 0;
    };
  }, []); // L'array vuoto assicura che l'effetto venga eseguito solo una volta al caricamento

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/burro">Burro</Link>
        <Link href="/jamesWillins">James Willins</Link>
        <Link href="/zlata">Zlata</Link>
        <Link href="/boldro">BOLDRO</Link>
      </div>

      <div className={styles.zlata}>
        {isImageVisible && (
          <Image
            src="/immagine-animata.jpg" // Sostituisci con il percorso della tua immagine
            alt="Immagine animata"
            width={600}
            height={400}
            className={`${styles.image} ${styles.imageOscillante}`}
          />
        )}

        {showScippato && (
          <div>
            <p>Oh no, sei stato scippato da dei magreb!</p>
            <Image
              src="/scippato.jpeg"
              alt="Scippato"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        )}
      </div>
    </div>
  );
}
