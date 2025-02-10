'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from 'react'; // Importiamo useRef
import styles from '../styles/Home.module.css';

export default function JamesWillins() {
  const audio = useRef(null); // Usando useRef per mantenere l'istanza dell'audio

  // Funzione per riprodurre il suono al caricamento della pagina
  useEffect(() => {
    // Crea l'audio al caricamento
    audio.current = new Audio('/western.mp3');

    // Funzione per riprodurre il suono al caricamento
    const playAudio = async () => {
      try {
        await audio.current.play(); // Prova a riprodurre il suono
      } catch (error) {
        console.error("Autoplay bloccato:", error); // Gestisci l'errore se l'autoplay è bloccato
      }
    };

    playAudio();

    // Funzione di pulizia per fermare il suono quando si lascia la pagina
    const stopAudio = () => {
      audio.current.pause();
      audio.current.currentTime = 0; // Resetta la posizione
    };

    // Aggiungi un event listener per fermare il suono quando la pagina viene lasciata
    window.addEventListener('beforeunload', stopAudio);

    // Pulizia dell'event listener e fermare il suono quando la pagina viene scaricata
    return () => {
      window.removeEventListener('beforeunload', stopAudio);
      if (audio.current) {
        audio.current.pause();
        audio.current.currentTime = 0;
      }
    };
  }, []); // Esegui questo effetto solo al caricamento della pagina

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
