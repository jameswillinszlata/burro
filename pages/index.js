// pages/index.js
'use client'; // Necessario per usare useState in Next.js

import Image from "next/image";
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [isBurroClicked, setIsBurroClicked] = useState(false);

  const sbustareBurro = () => {
    setIsBurroClicked(true); // Quando clicchi sul burro, cambia lo stato
  };

  return (
    <div className={styles.container}>
      {/* Menu di navigazione */}
      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/burro">Burroo</Link>
        <Link href="/jamesWillins">James Willins</Link>
        <Link href="/zlata">Zlata</Link>  {/* Aggiungi questo link */}
      </div>

      {/* Sezione Home con Burro */}
      <div className={styles.home}>
        {isBurroClicked ? (
          <>
            <Image src="/imburrato.webp" alt="Imburrato" width={500} height={300} className={styles.image} />
            <p>Sei stato imburrato!</p>
          </>
        ) : (
          <div className={styles.burro} onClick={sbustareBurro}>
            <Image src="/burro.jpeg" alt="Burro"  width={500} height={300} className={styles.image} />
            <p>Clicca!</p>
          </div>
        )}
      </div>
    </div>
  );
}
