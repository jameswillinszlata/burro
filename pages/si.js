// pages/si.js
'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'; // Importa il CSS qui

export default function Si() {
  const audio = new Audio('/dipre.mp3'); // Carica il suono desiderato

  // Funzione per avviare il suono quando la pagina viene caricata
  useEffect(() => {
    audio.play(); // Riproduce il suono

    // Funzione di pulizia per fermare il suono quando si lascia la pagina
    const stopAudio = () => {
      audio.pause();  // Ferma il suono
      audio.currentTime = 0; // Resetta il suono alla posizione iniziale
    };

    // Aggiungi l'event listener per fermare il suono quando l'utente lascia la pagina
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
        <Link href="/jamesWillins">James Willins</Link>
        <Link href="/zlata">Zlata</Link>
        <Link href="/boldro">BOLDRO</Link>
      </div>

      <div className={styles.jamesWillins}>
        <Image src="/andrea.jpeg" alt="Andrea" width={400} height={400} />
        <p>Sei un vero dipreista!</p>
      </div>

    </div>
  );
}

