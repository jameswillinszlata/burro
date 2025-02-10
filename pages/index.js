'use client';

import Image from "next/image";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [isBurroClicked, setIsBurroClicked] = useState(false);
  const [showTemporaryImage, setShowTemporaryImage] = useState(false);
  const [showImburrato, setShowImburrato] = useState(false);

  // Ref per i suoni
  const soundIniziale = useRef(null);
  const soundIntermedio = useRef(null);
  const soundFinale = useRef(null);
  const timeoutRef1 = useRef(null);
  const timeoutRef2 = useRef(null);

  useEffect(() => {
    // Inizializza gli audio
    soundIniziale.current = new Audio('/burro.mp3');
    soundIntermedio.current = new Audio('/ops.mp3');
    soundFinale.current = new Audio('/imburrato.mp3');

    // Prova a riprodurre il suono iniziale
    const playAudio = async () => {
      try {
        await soundIniziale.current.play();
      } catch (error) {
        console.error("Autoplay bloccato:", error);
      }
    };
    
    playAudio();

    // Cleanup per evitare memory leak
    return () => {
      soundIniziale.current.pause();
      soundIniziale.current.currentTime = 0;
      soundIntermedio.current.pause();
      soundIntermedio.current.currentTime = 0;
      soundFinale.current.pause();
      soundFinale.current.currentTime = 0;

      // Cancella eventuali timeout
      clearTimeout(timeoutRef1.current);
      clearTimeout(timeoutRef2.current);
    };
  }, []);

  const sbustareBurro = () => {
    setIsBurroClicked(true);
    setShowTemporaryImage(true);

    // Dopo 1 secondo, cambia immagine e suono
    timeoutRef1.current = setTimeout(() => {
      setShowTemporaryImage(false);
      setShowImburrato(true);
      soundIntermedio.current.play();

      // Dopo un altro secondo, riproduce il suono finale
      timeoutRef2.current = setTimeout(() => {
        soundFinale.current.play();
      }, 1000);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      {/* Menu di navigazione */}
      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/burro">Burroo</Link>
        <Link href="/jamesWillins">James Willins</Link>
        <Link href="/zlata">Zlata</Link>
        <Link href="/boldro">BOLDRO</Link>
      </div>

      {/* Sezione Home con Burro */}
      <div className={styles.home}>
        {!isBurroClicked ? (
          <div className={styles.burro} onClick={sbustareBurro}>
            <Image src="/burro.jpeg" alt="Burro" width={300} height={200} className={styles.image} />
            <p>Clicca!</p>
          </div>
        ) : (
          <>
            {showTemporaryImage && (
              <div className={styles.temporaryImage}>
                <Image
                  src="/imbarazzato.jpg"
                  alt="Immagine temporanea"
                  width={300}
                  height={300}
                  className={`${styles.image} ${styles.imageTemporanea}`}
                />
              </div>
            )}

            {showImburrato && (
              <>
                <Image src="/imburrato.webp" alt="Imburrato" width={300} height={300} className={styles.image} />
                <p>Sei stato imburrato!</p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
