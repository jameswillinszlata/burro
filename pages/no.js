import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from 'react'; // Importa useRef
import styles from '../styles/Home.module.css'; // Importa il CSS qui

export default function No() {
  const audio = useRef(new Audio('/police.mp3')); // Usa useRef per l'audio

  useEffect(() => {
    audio.current.play(); // Riproduce il suono al caricamento della pagina

    // Cleanup per evitare memory leaks
    return () => {
      audio.current.pause();
      audio.current.currentTime = 0;
    };
  }, []); // L'array vuoto fa sì che l'effetto venga eseguito solo una volta al caricamento

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
