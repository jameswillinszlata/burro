'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react"; // Aggiungi useRef
import styles from '../styles/Home.module.css';

export default function Sinistra() {
  const [isImageVisible, setIsImageVisible] = useState(true); // Stato per mostrare l'immagine animata
  const [showScippato, setShowScippato] = useState(false); // Stato per mostrare l'immagine finale

  const soundAnimata = useRef(new Audio('/spavento.mp3')); // Usando useRef per gestire l'audio
  const soundFinale = useRef(new Audio('/haram.mp3')); // Usando useRef per gestire l'audio finale

  useEffect(() => {
    soundAnimata.current.play(); // Suono per l'immagine animata

    // Mostra l'immagine animata per 3 secondi e poi sostituiscila con l'immagine finale
    const timer = setTimeout(() => {
      setIsImageVisible(false); // Nascondi l'immagine animata
      setShowScippato(true); // Mostra l'immagine finale

      // Ferma il suono dell'immagine animata e avvia il suono finale
      soundAnimata.current.pause();
      soundAnimata.current.currentTime = 0; // Resetta il suono animato
      soundFinale.current.play(); // Riproduce il suono finale
    }, 3000); // 3 secondi

    // Funzione di pulizia per fermare i suoni quando si lascia la pagina
    const stopAudio = () => {
      soundAnimata.current.pause();
      soundAnimata.current.currentTime = 0;
      soundFinale.current.pause();
      soundFinale.current.currentTime = 0;
    };

    // Aggiungi l'event listener per fermare il suono quando l'utente lascia la pagina
    window.addEventListener('beforeunload', stopAudio);

    // Pulisce il timer quando il componente viene smontato
    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeunload', stopAudio);
      soundAnimata.current.pause();  // Ferma il suono animato
      soundAnimata.current.currentTime = 0;
      soundFinale.current.pause(); // Ferma il suono finale
      soundFinale.current.currentTime = 0;
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
