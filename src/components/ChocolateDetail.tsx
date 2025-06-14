import React, { useState } from 'react';
import setaVoltar from '../assets/icones/seta.png';
import setaAvancar from '../assets/icones/setad.png';
import amargo811 from '../assets/Packs/811.png';
import amargo7030 from '../assets/Packs/70-30-38.png';
import amargo805 from '../assets/Packs/805.png';
import logo from '../assets/icones/logo_bc.png';
import homeIcon from '../assets/icones/home.png';
import styles from '../styles/ChocolateDetail.module.css';
import VideoPlayer from '../pages/VideoPlayer';
import RecipesList from './RecipesList';
import amargo811Video from '../assets/videos/amargo/811.webm';
import amargo7030Video from '../assets/videos/amargo/amargo7030.webm';
import amargo805Video from '../assets/videos/amargo/805.webm';
import amargoComb811Video from '../assets/videos/amargo/harmonizacao811.webm';
import amargoComb7030Video from '../assets/videos/amargo/harmonizacao7030.webm';
import amargoComb805Video from '../assets/videos/amargo/harmonizacao805.webm';


interface ChocolateDetailProps {
  onBack: () => void;
  onHome: () => void;
  soundPreference?: 'com-som' | 'sem-som';
}

const ChocolateDetail: React.FC<ChocolateDetailProps> = ({ onBack, onHome, soundPreference }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [showCombinationVideo, setShowCombinationVideo] = useState(false);
  const [showRecipes, setShowRecipes] = useState(false);
  const [selectedChocolate, setSelectedChocolate] = useState<typeof chocolates[0] | null>(null);

  const chocolates = [
    {
      id: '811',
      name: 'AMARGO 811',
      image: amargo811,
      description: 'Chocolate amargo 54,5% cacau',
      video: amargo811Video,
      combinationVideo: amargoComb811Video
    },
    {
      id: '70-30-38',
      name: 'AMARGO 70-30-38',
      image: amargo7030,
      description: 'Chocolate amargo 70% cacau',
      video: amargo7030Video,
      combinationVideo: amargoComb7030Video
    },
    {
      id: '805',
      name: 'AMARGO 805',
      image: amargo805,
      description: 'Chocolate amargo especial',
      video: amargo805Video,
      combinationVideo: amargoComb805Video
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
        chocolateType="Amargo"
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

export default ChocolateDetail; 