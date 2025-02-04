// pages/jamesWillins.js
'use client';

import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function JamesWillins() {
  const [risposta, setRisposta] = useState(null);

  const rispondi = (risposta) => {
    setRisposta(risposta); // Imposta la risposta dell'utente
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <a href="/">Home</a>
        <a href="/burro">Burro</a>
        <a href="/zlata">Zlata</a>
      </div>

      <div className={styles.jamesWillins}>
        <img src="/cowboy.jpeg" alt="Cowboy" />
        <p>Sei per caso un pippadores?</p>
        <button onClick={() => rispondi('si')}>Sì</button>
        <button onClick={() => rispondi('no')}>No</button>
      </div>

      {risposta === 'si' && (
        <div className={styles.risposta}>
          <img src="/andrea.jpeg" alt="Andrea" />
          <p>Sei un vero dipreista!</p>
        </div>
      )}
      {risposta === 'no' && (
        <div className={styles.risposta}>
          <img src="/police.jpeg" alt="Poliziotto" />
          <p>Sei stato arrestato!</p>
        </div>
      )}
    </div>
  );
}
