import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Usa next/image per ottimizzazione
import styles from '../styles/Home.module.css';

export default function Boldro() {
  const [selectedImage] = useState(null);

  const images = [
    { src: '/boldro1.jpg', alt: 'Puffo' },
    { src: '/boldro2.jpg', alt: 'Boxer' },
    { src: '/boldro3.jpg', alt: 'Personaggio 3' }, // Nome più neutro
  ];

  

  return (
    <div className={styles.container}>
      {/* Menu di navigazione */}
      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/burro">Burro</Link>
        <Link href="/jamesWillins">James Willins</Link>
        <Link href="/zlata">Zlata</Link>
      </div>

      <h1 className={styles.title}>Scegli il Boldro</h1>

      {/* Pulsanti di selezione */}
      <div className={styles.buttons}>
        {images.map((image, index) => (
          <button key={index} onClick={() => handleClick(index)} className={styles.button}>
            {image.alt}
          </button>
        ))}
      </div>

      {/* Mostra l'immagine selezionata */}
      {selectedImage && (
        <div className={styles.imageContainer}>
          <h2>Boldro Selezionato</h2>
          <Image src={selectedImage} alt="Immagine Selezionata" width={400} height={300} className={styles.selectedImage} />
        </div>
      )}
    </div>
  );
}
