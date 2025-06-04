import React, { useState } from 'react';
import aoLeite from '../assets/Packs/823.png';
import aoLeiteVideo from '../assets/videos/leite/leite.webm';
import leiteCombVideo from '../assets/videos/leite/harmonizacaoleite.webm';
import styles from '../styles/ChocolateDetail.module.css';
import VideoPlayer from '../pages/VideoPlayer';
import RecipesList from './RecipesList';
import setaVoltar from '../assets/icones/seta.png';
import logo from '../assets/icones/logo_bc.png';
import homeIcon from '../assets/icones/home.png';

interface MilkChocolateDetailProps {
  onBack: () => void;
  onHome: () => void;
  soundPreference?: 'com-som' | 'sem-som';
}

const MilkChocolateDetail: React.FC<MilkChocolateDetailProps> = ({ onBack, onHome, soundPreference }) => {
  const [showVideo, setShowVideo] = useState(true);
  const [showCombinationVideo, setShowCombinationVideo] = useState(false);
  const [showRecipes, setShowRecipes] = useState(false);

  if (showRecipes) {
    return (
      <RecipesList
        onBack={() => setShowRecipes(false)}
        onHome={onHome}
        chocolateType="Ao leite"
      />
    );
  }

  if (showCombinationVideo) {
    return (
      <VideoPlayer
        videoTitle="Melhores Combinações"
        videoSource={leiteCombVideo}
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
        videoTitle="Chocolate ao Leite"
        videoSource={aoLeiteVideo}
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
        <h1 className={styles.title}>CHOCOLATE AO LEITE 823</h1>
        
        <div className={styles.imageContainer}>
          <img 
            src={aoLeite} 
            alt="Chocolate ao Leite"
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

export default MilkChocolateDetail; 