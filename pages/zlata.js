// pages/zlata.js
'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Zlata() {
  const [risultato, setRisultato] = useState(null);

  const scegliDestra = () => {
    setRisultato('destra'); // Quando si sceglie destra, mostra il messaggio positivo
  };

  const scegliSinistra = () => {
    setRisultato('sinistra'); // Quando si sceglie sinistra, mostra il messaggio negativo
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/burro">Burro</Link>
        <Link href="/jamesWillins">James Willins</Link>
        <Link href="/zlata">Zlata</Link>
      </div>

      <div className={styles.zlata}>
        <img src="/magre.jpeg" alt="Magre" />
        <p>Vuoi la White Coco Zlata?</p>
        
        <div>
          <button className={styles.button} onClick={scegliDestra}>Destra</button>
          <button className={styles.button} onClick={scegliSinistra}>Sinistra</button>
        </div>

        {risultato === 'destra' && (
          <div className={styles.risultato}>
            <p>Ora puoi avere la White Coco Zlata!</p>
            <Image src="/white-coco.jpeg" alt="White Coco Zlata" className={styles.image} />
          </div>
        )}
        
        {risultato === 'sinistra' && (
          <div className={styles.risultato}>
            <p>Oh no, sei stato scippato da dei magreb!</p>
            <Image src="/scippato.jpeg" alt="Scippato" className={styles.image} />
          </div>
        )}
      </div>
    </div>
  );
}
