// pages/destra.js
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Home.module.css'; // Aggiungi il CSS qui

export default function Destra() {
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