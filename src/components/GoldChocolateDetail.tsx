import React, { useState } from 'react';
import gold from '../assets/Packs/gold.png';
import goldVideo from '../assets/videos/gold/Gold.webm';
import goldCombVideo from '../assets/videos/gold/harmonizacaogold.webm';
import styles from '../styles/ChocolateDetail.module.css';
import VideoPlayer from '../pages/VideoPlayer';
import RecipesList from './RecipesList';
import setaVoltar from '../assets/icones/seta.png';
import logo from '../assets/icones/logo_bc.png';
import homeIcon from '../assets/icones/home.png';

interface GoldChocolateDetailProps {
  onBack: () => void;
  onHome: () => void;
  soundPreference?: 'com-som' | 'sem-som';
}

const GoldChocolateDetail: React.FC<GoldChocolateDetailProps> = ({ onBack, onHome, soundPreference }) => {
  const [showVideo, setShowVideo] = useState(true);
  const [showCombinationVideo, setShowCombinationVideo] = useState(false);
  const [showRecipes, setShowRecipes] = useState(false);

  if (showRecipes) {
    return (
      <RecipesList
        onBack={() => setShowRecipes(false)}
        onHome={onHome}
        chocolateType="Gold"
      />
    );
  }

  if (showCombinationVideo) {
    return (
      <VideoPlayer
        videoTitle="Melhores Combinações"
        videoSource={goldCombVideo}
        onBack={() => setShowCombinationVideo(false)}
        onHome={onHome}
        isMuted={soundPreference === 'sem-som'}
        onVideoEnd={() => setShowCombinationVideo(false)}
      />
    );
  }

  if (showVideo) {
    return (
      <VideoPlayer
        videoTitle="Chocolate Gold"
        videoSource={goldVideo}
        onBack={onBack}
        onHome={onHome}
        isMuted={soundPreference === 'sem-som'}
        onVideoEnd={() => setShowVideo(false)}
      />
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={onBack} className={styles.backButton}>
          <img src={setaVoltar} alt="Voltar" className={styles.backIcon} />
        </button>
        <img src={logo} alt="Callebaut Logo" className={styles.logoIcon} />
        <button onClick={onHome} className={styles.homeButton}>
          <img src={homeIcon} alt="Home" className={styles.homeIcon} />
        </button>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>CHOCOLATE GOLD</h1>
        
        <div className={styles.imageContainer}>
          <img 
            src={gold} 
            alt="Chocolate Gold"
            className={styles.chocolateImage}
          />
        </div>


        <div className={styles.buttonContainer}>
          <button 
            className={styles.actionButton}
            onClick={() => setShowCombinationVideo(true)}
          >
            Melhores combinações
          </button>
          <button 
            className={styles.actionButton}
            onClick={() => setShowRecipes(true)}
          >
            Receitas
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoldChocolateDetail; 