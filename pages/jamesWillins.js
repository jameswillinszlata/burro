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
        <Link href="/boldro">BOLDRO</Link>
      </div>

      <div className={styles.jamesWillins}>
        <Image src="/cowboy.jpeg" alt="Cowboy" width={400} height={400}/>
        <p>Sei per caso un pippadores?</p>

        {/* Bottoni con uno stile migliorato */}
        <div className={styles.buttons}>
          <Link href="/si">
            <button className={styles.button}>Sì</button>
          </Link>
          <Link href="/no">
            <button className={styles.button}>No</button>
          </Link>
        </div>
      </div>
    </div>
  );
}