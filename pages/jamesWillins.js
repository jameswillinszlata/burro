// pages/jamesWillins.js
'use client';

import Image from "next/image";
import Link from "next/link";
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
        <Link href="/">Home</Link>
        <Link href="/burro">Burro</Link>
        <Link href="/zlata">Zlata</Link>
      </div>

      <div className={styles.jamesWillins}>
        <Image src="/cowboy.jpeg" alt="Cowboy" width={500} height={300}/>
        <p>Sei per caso un pippadores?</p>
        <button onClick={() => rispondi('si')}>Sì</button>
        <button onClick={() => rispondi('no')}>No</button>
      </div>

      {risposta === 'si' && (
        <div className={styles.risposta}>
          <Image src="/andrea.jpeg" alt="Andrea" width={500} height={300}/>
          <p>Sei un vero dipreista!</p>
        </div>
      )}
      {risposta === 'no' && (
        <div className={styles.risposta}>
          <Image src="/police.jpeg" alt="Poliziotto" width={500} height={300}/>
          <p>Sei stato arrestato!</p>
        </div>
      )}
    </div>
  );
}
