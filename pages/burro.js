'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from 'react'; // Importa useRef per la gestione dell'audio
import styles from '../styles/Home.module.css';

export default function Burro() {
  const [iban, setIban] = useState('');
  const sound = useRef(null); // Riferimento per l'audio

  useEffect(() => {
    // Verifica se il codice è eseguito nel browser
    if (typeof window !== "undefined") {
      sound.current = new Audio('/hack.mp3'); // Crea il suono
      sound.current.loop = true; // Ripetizione del suono
      sound.current.play();

      // Pulizia quando la pagina viene lasciata
      return () => {
        sound.current.pause();
        sound.current.currentTime = 0;
      };
    }
  }, []);

  const handleInputChange = (event) => {
    setIban(event.target.value); // Gestisce l'input dell'IBAN
  };

  const handleSubmit = () => {
    // Invia l'IBAN (aggiungi il comportamento desiderato)
    alert(`IBAN Inviato: ${iban}`);
    // Puoi implementare qui un'azione per inviare l'IBAN (come una chiamata API)
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/jamesWillins">James Willins</Link>
        <Link href="/zlata">Zlata</Link>
        <Link href="/boldro">BOLDRO</Link>
      </div>

      <div className={styles.burro}>
        <Image src="/evil-butter.png" alt="Burro Malvagio" width={500} height={300} />
        <p>Sei stato hackerato, dammi il tuo IBAN!</p>
        <input
          type="text"
          placeholder="Inserisci IBAN"
          value={iban}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Invia IBAN</button>
      </div>
    </div>
  );
}
