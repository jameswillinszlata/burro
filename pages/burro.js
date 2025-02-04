// pages/burro.js
'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Burro() {
  const [iban, setIban] = useState('');

  const handleInputChange = (event) => {
    setIban(event.target.value); // Gestisce l'input dell'IBAN
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/jamesWillins">James Willins</Link>
        <Link href="/zlata">Zlata</Link>
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
