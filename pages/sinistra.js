'use client';

import Image from "next/image";
import Link from "next/link";
import {  useState } from "react"; // Aggiungi useRef
import styles from '../styles/Home.module.css';

export default function Sinistra() {
  const [isImageVisible, ] = useState(true); // Stato per mostrare l'immagine animata
  const [showScippato, ] = useState(false); // Stato per mostrare l'immagine finale

  
  
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
