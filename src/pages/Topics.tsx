import React, { useState, useEffect } from 'react';
import styles from '../styles/Topics.module.css';
import logo from '../assets/icones/logo_bc.png';
import setaVoltar from '../assets/icones/seta.png';
import setaAvancar from '../assets/icones/setad.png';
import VideoPlayer from './VideoPlayer';
import academyVideo from '../assets/videos/acad/academy.webm';
import introVideo from '../assets/videos/ola_soucesar.webm';
import ChocolateColors from '../components/ChocolateColors';
import RecipesGrid from '../components/RecipesGrid';

interface TopicsProps {
  onBack: () => void;
  onSelectTopic: (topic: string) => void;
  soundPreference: 'com-som' | 'sem-som';
  onVideoEnd: () => void;
  fromHome?: boolean;
}

const Topics: React.FC<TopicsProps> = ({ onBack, onSelectTopic, soundPreference, onVideoEnd, fromHome = false }) => {
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; source: string } | null>(null);
  const [showContent, setShowContent] = useState(() => !fromHome);
  const [shouldShowVideo, setShouldShowVideo] = useState(() => fromHome);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  useEffect(() => {
    console.log('fromHome:', fromHome);
    console.log('shouldShowVideo:', shouldShowVideo);

    if (fromHome) {
      setShouldShowVideo(true);
      setShowContent(false);
 
       const timer = setTimeout(() => {
        setShowContent(true);
        setShouldShowVideo(false);
      }, 9400);

      return () => clearTimeout(timer);  
    } else {
      setShouldShowVideo(false);
      setShowContent(true);
    }
  }, [fromHome]);

  const topics = [
    {
      title: 'Callebaut',
      description: '',
    },
    {
      title: '5 cores',
      description: 'Conheça cada tipo de chocolate',
    },
    {
      title: 'Dicas',
      description: 'Tudo para ajudar na sua rotina',
    },
    {
      title: 'Chocolate Academy',
      description: 'Cursos',
      videoData: {
        title: 'Chocolate Academy',
        source: academyVideo
      }
    },
    {
      title: 'Receitas',
      description: 'Muito sabor e infinitas possibilidades',
    },
  ];

  const handleTopicSelect = (topic: string, videoData?: { title: string; source: string }) => {
    if (topic === '5 cores' || topic === 'Receitas') {
      setSelectedTopic(topic);
    } else if (videoData) {
      setSelectedVideo(videoData);
    } else {
      onSelectTopic(topic);
    }
  };

  const handleBack = () => {
    if (selectedTopic) {
      setSelectedTopic(null);
    } else {
      onBack();
    }
  };

  const handleSkipVideo = () => {
    setShowContent(true);
    setShouldShowVideo(false);
  };

  if (selectedVideo) {
    return (
      <VideoPlayer
        videoTitle={selectedVideo.title}
        videoSource={selectedVideo.source}
        onBack={() => setSelectedVideo(null)}
        onHome={onBack}
        isMuted={soundPreference === 'sem-som'}
        onVideoEnd={onVideoEnd}
      />
    );
  }

  if (shouldShowVideo) {
    return (
      <div className={styles.container}>
        <button onClick={onBack} className={styles.backButton}>
          <img src={setaVoltar} alt="Voltar" className={styles.backIcon} />
        </button>
        <div className={styles.videoContainer}>
          <video
            autoPlay
            className={styles.video}
            muted={soundPreference === 'sem-som'}
          >
            <source src={introVideo} type="video/webm" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <button onClick={handleSkipVideo} className={styles.skipButton}>
            Pular vídeo
          </button>
        </div>
      </div>
    );
  }

  if (selectedTopic === '5 cores') {
    return (
      <div className={styles.container}>
        <ChocolateColors 
          onBack={handleBack} 
          onHome={() => {
            setSelectedTopic(null);
            setSelectedVideo(null);
            setShowContent(true);
            setShouldShowVideo(false);
          }}
          soundPreference={soundPreference}
        />
      </div>
    );
  }

  if (selectedTopic === 'Receitas') {
    return (
      <div className={styles.container}>
        <RecipesGrid 
          onBack={handleBack} 
          onHome={() => {
            setSelectedTopic(null);
            setSelectedVideo(null);
            setShowContent(true);
            setShouldShowVideo(false);
          }} 
        />
      </div>
    );
  }

  if (showContent) {
    return (
      <div className={styles.container}>
        <button onClick={handleBack} className={styles.backButton}>
          <img src={setaVoltar} alt="Voltar" className={styles.backIcon} />
        </button>

        <img src={logo} alt="Callebaut Logo" className={styles.logo} />

        <h1 className={styles.title}>Toque em um tema</h1>

        <div className={styles.topicsList}>
          {topics.map((topic) => (
            <button
              key={topic.title}
              className={styles.topicItem}
              onClick={() => handleTopicSelect(topic.title, topic.videoData)}
            >
              <div className={styles.topicContent}>
                <h2 className={styles.topicTitle}>{topic.title}</h2>
                {topic.description && (
                  <p className={styles.topicDescription}>{topic.description}</p>
                )}
              </div>
              <img src={setaAvancar} alt="Avançar" className={styles.nextIcon} />
            </button>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default Topics; 