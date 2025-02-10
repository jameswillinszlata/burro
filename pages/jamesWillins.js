// pages/jamesWillins.js
'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react'; // Importiamo useEffect
import styles from '../styles/Home.module.css';

export default function JamesWillins() {
  const [risposta, setRisposta] = useState(null);
  const audio = new Audio('/western.mp3'); // Carichiamo il suono

  // Funzione per riprodurre il suono al caricamento della pagina
  useEffect(() => {
    audio.play(); // Inizia il suono quando la pagina è caricata

    // Funzione di pulizia per fermare il suono quando si lascia la pagina
    const stopAudio = () => {
      audio.pause();  // Ferma il suono
      audio.currentTime = 0; // Resetta il suono alla posizione iniziale
    };

    // Aggiungi un event listener per fermare il suono quando la pagina viene lasciata
    window.addEventListener('beforeunload', stopAudio);

    // Rimuovi l'event listener quando la pagina è scaricata
    return () => {
      window.removeEventListener('beforeunload', stopAudio);
      audio.pause();  // Ferma il suono in caso l'utente lasci la pagina prima
    };
  }, []); // L'array vuoto assicura che l'effetto venga eseguito solo una volta al caricamento

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/burro">Burro</Link>
        <Link href="/zlata">Zlata</Link>
        <Link href="/boldro">BOLDRO</Link>
      </div>

      <div className={styles.jamesWillins}>
        <Image src="/cowboy.jpeg" alt="Cowboy" width={400} height={400} />
        <p>Sei per caso un pippadores?</p>

        {/* Bottoni con uno stile migliorato */}
        <div className={styles.buttons}>
          <Link href="/si">
            <button className={styles.button}>Sì</button>
          </Link>
          <Link href="/no">
            <button className={styles.button}>No</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
