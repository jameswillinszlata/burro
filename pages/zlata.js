// pages/zlata.js
'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Zlata() {
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
        <img src="/magre.jpeg" alt="Magre" width={300} height={300}/>
        <p>Vuoi la White Coco Zlata?</p>
        
        <div>
          {/* Usare Link per la navigazione tra le pagine */}
          <Link href="/destra">
            <button className={styles.button}>Destra</button>
          </Link>
          <Link href="/sinistra">
            <button className={styles.button}>Sinistra</button>
          </Link>
        </div>
      </div>
    </div>
  );
} 