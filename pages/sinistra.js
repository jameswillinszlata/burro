// pages/sinistra.js
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"; // Importa useState e useEffect per la gestione del timer
import styles from '../styles/Home.module.css';

export default function Sinistra() {
  const [isImageVisible, setIsImageVisible] = useState(true); // Stato per mostrare l'immagine animata
  const [showScippato, setShowScippato] = useState(false); // Stato per mostrare l'immagine finale

  useEffect(() => {
    // Mostra l'immagine animata per 3 secondi e poi sostituiscila con l'immagine finale
    const timer = setTimeout(() => {
      setIsImageVisible(false); // Nascondi l'immagine animata
      setShowScippato(true); // Mostra l'immagine finale
    }, 3000); // 3 secondi

    return () => clearTimeout(timer); // Pulisce il timer quando il componente viene smontato
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
        {isImageVisible && (
          <Image
            src="/immagine-animata.jpg" // Sostituisci con il percorso della tua immagine
            alt="Immagine animata"
            width={600}
            height={400}
            className={`${styles.image} ${styles.imageOscillante}`} // Concatenazione corretta
          />
        )}

        {showScippato && (
          <div>
            <p>Oh no, sei stato scippato da dei magreb!</p>
            <Image
              src="/scippato.jpeg"
              alt="Scippato"
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        )}
      </div>
    </div>
  );
}
