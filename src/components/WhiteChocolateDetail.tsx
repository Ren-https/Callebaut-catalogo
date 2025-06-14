import React, { useState } from 'react';
import setaVoltar from '../assets/icones/seta.png';
import setaAvancar from '../assets/icones/setad.png';
import velvet from '../assets/Packs/velvet.png';
import cw2 from '../assets/Packs/cw2.png';
import w2 from '../assets/Packs/w2.png';
import logo from '../assets/icones/logo_bc.png';
import homeIcon from '../assets/icones/home.png';
import styles from '../styles/ChocolateDetail.module.css';
import VideoPlayer from '../pages/VideoPlayer';
import RecipesList from './RecipesList';
import velvetVideo from '../assets/videos/branco/BrancoVelvet.webm';
import w2Video from '../assets/videos/branco/brancow2.webm';
import cw2Video from '../assets/videos/branco/cw2.webm';
import velvetCombVideo from '../assets/videos/branco/harmonizacaovelvet.webm';
import w2CombVideo from '../assets/videos/branco/harmonizacaoW2.webm';
import cw2CombVideo from '../assets/videos/branco/harmonizacaocw2.webm';


interface WhiteChocolateDetailProps {
  onBack: () => void;
  onHome: () => void;
  soundPreference?: 'com-som' | 'sem-som';
}

const WhiteChocolateDetail: React.FC<WhiteChocolateDetailProps> = ({ onBack, onHome, soundPreference }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [showCombinationVideo, setShowCombinationVideo] = useState(false);
  const [showRecipes, setShowRecipes] = useState(false);
  const [selectedChocolate, setSelectedChocolate] = useState<typeof chocolates[0] | null>(null);

  const chocolates = [
    {
      id: 'velvet',
      name: 'CHOCOLATE BRANCO VELVET',
      image: velvet,
      description: 'Chocolate branco premium',
      video: velvetVideo,
      combinationVideo: velvetCombVideo
    },
    {
      id: 'w2',
      name: 'CHOCOLATE BRANCO W2',
      image: w2,
      description: 'Chocolate branco tradicional',
      video: w2Video,
      combinationVideo: w2CombVideo
    },
    {
      id: 'cw2',
      name: 'CHOCOLATE BRANCO CW2',
      image: cw2,
      description: 'Chocolate branco especial',
      video: cw2Video,
      combinationVideo: cw2CombVideo
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === chocolates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? chocolates.length - 1 : prevIndex - 1
    );
  };

  const handleChocolateClick = (chocolate: typeof chocolates[0]) => {
    setSelectedChocolate(chocolate);
    setShowVideo(true);
  };

  const currentChocolate = chocolates[currentIndex];

  if (showRecipes && selectedChocolate) {
    return (
      <RecipesList
        onBack={() => setShowRecipes(false)}
        onHome={onHome}
        chocolateType="Branco"
      />
    );
  }

  if (showCombinationVideo && selectedChocolate) {
    return (
      <VideoPlayer
        videoTitle={`Melhores Combinações`}
        videoSource={selectedChocolate.combinationVideo}
        onBack={() => setShowCombinationVideo(false)}
        onHome={onHome}
        isMuted={soundPreference === 'sem-som'}
        onVideoEnd={() => setShowCombinationVideo(false)}
      />
    );
  }

  if (showVideo && selectedChocolate) {
    return (
      <VideoPlayer
        videoTitle={selectedChocolate.name}
        videoSource={selectedChocolate.video}
        onBack={() => {
          setShowVideo(false);
          setSelectedChocolate(null);
        }}
        onHome={onHome}
        isMuted={soundPreference === 'sem-som'}
        onVideoEnd={() => setShowVideo(false)}
      />
    );
  }

  if (selectedChocolate) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <button onClick={() => setSelectedChocolate(null)} className={styles.backButton}>
            <img src={setaVoltar} alt="Voltar" className={styles.backIcon} />
          </button>
          <img src={logo} alt="Callebaut Logo" className={styles.logoIcon} />
          <button onClick={onHome} className={styles.homeButton}>
            <img src={homeIcon} alt="Home" className={styles.homeIcon} />
          </button>
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>{selectedChocolate.name}</h1>
          
          <div className={styles.imageContainer}>
            <img 
              src={selectedChocolate.image} 
              alt={selectedChocolate.name}
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
        <h1 className={styles.title}>{currentChocolate.name}</h1>
        
        <div className={styles.carouselContainer}>
          <button onClick={handlePrevious} className={styles.carouselButton}>
            <img src={setaVoltar} alt="Anterior" />
          </button>
          
          <div 
            className={styles.imageContainer}
            onClick={() => handleChocolateClick(currentChocolate)}
            style={{ cursor: 'pointer' }}
          >
            <img 
              src={currentChocolate.image} 
              alt={currentChocolate.name}
              className={styles.chocolateImage}
            />
          </div>
          
          <button onClick={handleNext} className={styles.carouselButton}>
            <img src={setaAvancar} alt="Próximo" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default WhiteChocolateDetail; 