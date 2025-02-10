import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Home.module.css'; // Importa il CSS qui

export default function No() {
  
  
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
