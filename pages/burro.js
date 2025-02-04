// pages/burro.js
'use client';

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
        <a href="/">Home</a>
        <a href="/jamesWillins">James Willins</a>
        <a href="/zlata">Zlata</a>
      </div>

      <div className={styles.burro}>
        <img src="/evil-butter.png" alt="Burro Malvagio" />
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
