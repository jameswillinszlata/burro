'use client';

import { useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Home.module.css';

export default function Destra() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Creiamo l'audio solo quando il componente è montato
    audioRef.current = new Audio('/yes.mp3');
    const audio = audioRef.current;
    audio.loop = true;

    // Proviamo a riprodurre il suono
    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.error("Autoplay non consentito:", error);
      }
    };

    playAudio();

    // Cleanup quando il componente si smonta
    return () => {
      audio.pause();
      audio.currentTime = 0;
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

      <div className={styles.zlata}>
        <p>Ora puoi avere la White Coco Zlata!</p>
        <Image src="/white-coco.jpeg" alt="White Coco Zlata" width={300} height={300} />
      </div>
    </div>
  );
}
