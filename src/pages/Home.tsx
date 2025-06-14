import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import logo from '../assets/icones/logo_bc.png'
import volumeOn from '../assets/icones/volumeon.png';
import volumeOff from '../assets/icones/volumeoff.png';
import avancar from '../assets/icones/setad.png'

interface HomeProps {
  onNext: (option: 'com-som' | 'sem-som', fromHome?: boolean) => void;
}

const Home: React.FC<HomeProps> = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState<'com-som' | 'sem-som' | null>(null);

  const handleOptionClick = (option: 'com-som' | 'sem-som') => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      onNext(selectedOption, true);
    }
  };

  return (
      <div className={styles.container}>
        <img
          src={logo} 
          alt="Callebaut Logo"
          className={styles.logo}
        />
      <h1 className={styles.title}>Como você quer interagir?</h1>
        <div className={styles.optionsContainer}>
          <button
          className={`${styles.option} ${selectedOption === 'com-som' ? styles.selected : ''}`}
          onClick={() => handleOptionClick('com-som')}
        >
          <img
            src={volumeOn} 
            alt="Com som"
            className={styles.optionIcon}
          />
          <p className={styles.optionText}>Com som</p>
        </button>

        <button
          className={`${styles.option} ${selectedOption === 'sem-som' ? styles.selected : ''}`}
          onClick={() => handleOptionClick('sem-som')}
        >
          <img
            src={volumeOff} 
            alt="Sem som"
            className={styles.optionIcon}
          />
          <p className={styles.optionText}>Sem som</p>
        </button>
      </div>

      <button
        className={styles.nextButton}
        onClick={handleNext}
        disabled={!selectedOption}
      >
        <img
          src={avancar} 
          alt='Avançar'
          className={styles.nextIcon}
        />
      </button>
    </div>
  );
};

export default Home; 