'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';

export default function Zlata() {
  const sound = useRef(null); // Usando useRef per l'audio

  useEffect(() => {
    // Crea l'oggetto audio al caricamento della pagina
    sound.current = new Audio('/mexico.mp3');
    sound.current.loop = true; // Fa ripetere il suono
    sound.current.play(); // Avvia il suono

    // Funzione di pulizia per fermare l'audio quando si lascia la pagina
    const stopAudio = () => {
      sound.current.pause();
      sound.current.currentTime = 0;
    };

    // Aggiunge un listener per fermare il suono quando la pagina viene lasciata
    window.addEventListener('beforeunload', stopAudio);

    // Pulizia dell'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener('beforeunload', stopAudio);
      if (sound.current) {
        sound.current.pause();
        sound.current.currentTime = 0;
      }
    };
  }, []); // Esegui questo effetto solo al caricamento della pagina

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
        <Image src="/magre.jpeg" alt="Magre" width={300} height={300} />
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
