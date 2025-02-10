'use client';

import Image from "next/image";
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  

  

  return (
    <div className={styles.container}>
      {/* Menu di navigazione */}
      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/burro">Burroo</Link>
        <Link href="/jamesWillins">James Willins</Link>
        <Link href="/zlata">Zlata</Link>
        <Link href="/boldro">BOLDRO</Link>
      </div>

      {/* Sezione Home con Burro */}
      <div className={styles.home}>
        {!isBurroClicked ? (
          <div className={styles.burro} onClick={sbustareBurro}>
            <Image src="/burro.jpeg" alt="Burro" width={300} height={200} className={styles.image} />
            <p>Clicca!</p>
          </div>
        ) : (
          <>
            {showTemporaryImage && (
              <div className={styles.temporaryImage}>
                <Image
                  src="/imbarazzato.jpg"
                  alt="Immagine temporanea"
                  width={300}
                  height={300}
                  className={`${styles.image} ${styles.imageTemporanea}`}
                />
              </div>
            )}

            {showImburrato && (
              <>
                <Image src="/imburrato.webp" alt="Imburrato" width={300} height={300} className={styles.image} />
                <p>Sei stato imburrato!</p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
