// pages/zlata.js
'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Zlata() {
  const sound = new Audio('/mexico.mp3'); // Sostituisci con il tuo file audio

  useEffect(() => {
    // Avvia il suono quando la pagina viene caricata
    sound.loop = true; // Fa ripetere il suono
    sound.play();

    // Pulisce il suono quando si lascia la pagina
    return () => {
      sound.pause();
      sound.currentTime = 0;
    };
  }, []);

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
        <img src="/magre.jpeg" alt="Magre" width={300} height={300}/>
        <p>Vuoi la White Coco Zlata?</p>
        
        <div>
          <Link href="/destra">
            <button className={styles.button}>Destra</button>
          </Link>
          <Link href="/sinistra">
            <button className={styles.button}>Sinistra</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
