// pages/no.js
import Image from "next/image";
import Link from "next/link";
import { useEffect } from 'react'; // Importa useEffect per gestire il suono
import styles from '../styles/Home.module.css'; // Importa il CSS qui

export default function No() {
  useEffect(() => {
    // Crea un oggetto Audio per il suono
    const audio = new Audio('/police.mp3'); // Percorso del suono

    // Avvia il suono al caricamento della pagina
    audio.play();

    // Cleanup per evitare memory leaks
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []); // L'array vuoto fa sì che l'effetto venga eseguito solo una volta quando la pagina è caricata

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
        <Image src="/sbirro.png" alt="Poliziotto" width={300} height={300} />
        <p>Sei stato arrestato!</p>
      </div>
    </div>
  );
}
