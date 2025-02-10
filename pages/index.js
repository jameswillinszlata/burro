// pages/index.js
'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [isBurroClicked, setIsBurroClicked] = useState(false);
  const [showTemporaryImage, setShowTemporaryImage] = useState(false);
  const [showImburrato, setShowImburrato] = useState(false);

  // Carica i suoni
  const soundIniziale = new Audio('/burro.mp3'); // Suono quando la pagina viene caricata
  const soundIntermedio = new Audio('/ops.mp3'); // Suono quando compare l'immagine temporanea
  const soundFinale = new Audio('/imburrato.mp3'); // Suono quando compare "Imburrato"

  useEffect(() => {
    // Riproduce il suono iniziale quando la pagina viene caricata
    soundIniziale.play();

    // Pulisce il suono quando si lascia la pagina
    return () => {
      soundIniziale.pause();
      soundIniziale.currentTime = 0;
      soundIntermedio.pause();
      soundIntermedio.currentTime = 0;
      soundFinale.pause();
      soundFinale.currentTime = 0;
    };
  }, []);

  const sbustareBurro = () => {
    setIsBurroClicked(true);
    setShowTemporaryImage(true); // Mostra l'immagine temporanea

    // Dopo 1 secondo, cambia immagine e suono
    setTimeout(() => {
      setShowTemporaryImage(false);
      setShowImburrato(true); // Mostra l'immagine finale
      soundIntermedio.play(); // Suono per l'immagine intermedia

      // Dopo un altro secondo, riproduci il suono finale
      setTimeout(() => {
        soundFinale.play(); // Suono quando appare "Imburrato"
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
