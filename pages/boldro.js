import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'; // Importa il CSS

export default function Boldro() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/boldro1.jpg', alt: 'Immagine 1' },
    { src: '/boldro2.jpg', alt: 'Immagine 2' },
    { src: '/boldro3.jpg', alt: 'Immagine 3' },
  ];

  const handleClick = (index) => {
    setSelectedImage(images[index].src);
  };

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

      {/* Tre pulsanti per selezionare l'immagine */}
      <div className={styles.buttons}>
        <button onClick={() => handleClick(0)} className={styles.button}>Puffo</button>
        <button onClick={() => handleClick(1)} className={styles.button}>Boxer</button>
        <button onClick={() => handleClick(2)} className={styles.button}>Ebreo</button>
      </div>

      {/* Se un'immagine è selezionata, la visualizziamo */}
      {selectedImage && (
        <div className={styles.imageContainer}>
          <h2>Boldro Selezionato</h2>
          <img src={selectedImage} alt="Immagine Selezionata" className={styles.selectedImage} />
        </div>
      )}
    </div>
  );
} 