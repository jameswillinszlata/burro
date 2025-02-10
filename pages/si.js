'use client';

import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Home.module.css'; // Importa il CSS qui

export default function Si() {
  
  
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/burro">Burro</Link>
        <Link href="/jamesWillins">James Willins</Link>
        <Link href="/zlata">Zlata</Link>
        <Link href="/boldro">BOLDRO</Link>
      </div>

      <div className={styles.jamesWillins}>
        <Image src="/andrea.jpeg" alt="Andrea" width={400} height={400} />
        <p>Sei un vero dipreista!</p>
      </div>

    </div>
  );
}
