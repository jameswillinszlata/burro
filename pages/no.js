import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from 'react'; // Importa useRef
import styles from '../styles/Home.module.css'; // Importa il CSS qui

export default function No() {
  const audio = useRef(new Audio('/police.mp3')); // Usa useRef per l'audio

  useEffect(() => {
    const audioRef = audio;  // Crea una variabile locale per il ref
    audioRef.play();
  
    return () => {
      audioRef.pause();
      audioRef.currentTime = 0;
    };
  }, []);
  
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
