// pages/burro.js
'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Burro() {
  const [iban, setIban] = useState('');

  useEffect(() => {
    // Controlla se il codice è eseguito nel browser
    if (typeof window !== "undefined") {
      const sound = new Audio('/hack.mp3'); // Cambia con il tuo file audio
      sound.loop = true; // Fa ripetere il suono
      sound.play();

      // Ferma il suono quando si lascia la pagina
      return () => {
        sound.pause();
        sound.currentTime = 0;
      };
    }
  }, []);

  const handleInputChange = (event) => {
    setIban(event.target.value); // Gestisce l'input dell'IBAN
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/jamesWillins">James Willins</Link>
        <Link href="/zlata">Zlata</Link>
        <Link href="/boldro">BOLDRO</Link>
      </div>

      <div className={styles.burro}>
        <Image src="/evil-butter.png" alt="Burro Malvagio" width={500} height={300} />
        <p>Sei stato hackerato, dammi il tuo IBAN!</p>
        <input
          type="text"
          placeholder="Inserisci IBAN"
          value={iban}
          onChange={handleInputChange}
        />
        <button>Invia IBAN</button>
      </div>
    </div>
  );
}
