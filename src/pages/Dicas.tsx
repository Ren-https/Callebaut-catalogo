import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/CallebautTopics.module.css';
import logo from '../assets/icones/logo_bc.png';
import setaVoltar from '../assets/icones/seta.png';
import home from '../assets/icones/home.png';
import TEMPERATURA_ICON from '../assets/icones/temperagem.png';
import TUTORIAIS_ICON from '../assets/icones/tutoriais.png';
import CORES_ICON from '../assets/icones/cores.png';
import SUSTENTABILIDADE_ICON from '../assets/icones/iconesustentabilidade.png';
import FLUIDEZ_ICON from '../assets/icones/fluidez.png';
import CONSERVAR_ICON from '../assets/icones/conservar.png';
import QRCodePage from './QRCodePage';
import qrtemperagem from '../assets/QR_Codes/Dicas/temperagem.png'
import qrtutoriais from '../assets/QR_Codes/Dicas/tutoriais.png'
import qrcores from '../assets/QR_Codes/Dicas/cores.png'
import qrsustentabilidade from '../assets/QR_Codes/Dicas/sustentabilidade.png'
import qrfluidez from '../assets/QR_Codes/Dicas/fluidez.png'
import qrconservar from '../assets/QR_Codes/Dicas/conservar.png'
import dicasintro from '../assets/videos/dicas/dica_01.webm';

interface DicasProps {
  onBack: () => void;
  onSelectTopic: (topic: string) => void;
  soundPreference: 'com-som' | 'sem-som';
  onHome: () => void;
}

const Dicas: React.FC<DicasProps> = ({ onBack, onSelectTopic, onHome, soundPreference }) => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 13400);

    return () => clearTimeout(timer);
  }, []);

  const handleSkipVideo = () => {
    setShowContent(true);
    if (videoRef.current) {
      videoRef.current.currentTime = videoRef.current.duration;
    }
  };

  const topics = [
    {
      title: 'Temperagem',
      icon: TEMPERATURA_ICON,
      qrCode: qrtemperagem,
      description: 'Aprenda as técnicas corretas de temperagem do chocolate Callebaut.'
    },
    {
      title: 'Tutoriais gratuitos',
      icon: TUTORIAIS_ICON,
      qrCode: qrtutoriais,
      description: 'Acesse nossa biblioteca de tutoriais e aprimore suas habilidades.'
    },
    {
      title: '5 cores',
      icon: CORES_ICON,
      qrCode: qrcores,
      description: 'Descubra a paleta exclusiva de chocolates Callebaut.'
    },
    {
      title: 'Barry Callebaut e Sustentabilidade',
      icon: SUSTENTABILIDADE_ICON,
      qrCode: qrsustentabilidade,
      description: 'Conheça nosso compromisso com o futuro sustentável do chocolate.'
    },
    {
      title: 'Níveis de fluidez e aplicações',
      icon: FLUIDEZ_ICON,
      qrCode: qrfluidez,
      description: 'Entenda os diferentes níveis de fluidez e suas aplicações ideais.'
    },
    {
      title: 'Como conservar o chocolate',
      icon: CONSERVAR_ICON,
      qrCode: qrconservar,
      description: 'Aprenda as melhores práticas para conservar seu chocolate.'
    },
  ];

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
    onSelectTopic(topic);
  };

  const handleBack = () => {
    setSelectedTopic(null);
  };

  if (selectedTopic) {
    const topic = topics.find(t => t.title === selectedTopic);
    if (topic) {
      return (
        <QRCodePage
          title={topic.title}
          qrCodeUrl={topic.qrCode}
          description={topic.description}
          onBack={handleBack}
          onHome={onHome}
          soundPreference={soundPreference}
        />
      );
    }
  }

  if (!showContent) {
    return (
      <div className={styles.container}>
        <button onClick={onBack} className={styles.backButton}>
          <img src={setaVoltar} alt="Voltar" className={styles.backIcon} />
        </button>

        <button onClick={onHome} className={styles.homeButton}>
          <img src={home} alt="Início" className={styles.homeIcon} />
        </button>

        <div className={styles.videoContainer}>
          <video 
            ref={videoRef}
            autoPlay 
            muted={soundPreference === 'sem-som'}
            className={styles.video}
          >
            <source src={dicasintro} type="video/webm" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
        <button onClick={handleSkipVideo} className={styles.skipButton}>
          Pular vídeo
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <button onClick={onBack} className={styles.backButton}>
        <img src={setaVoltar} alt="Voltar" className={styles.backIcon} />
      </button>

      <button onClick={onHome} className={styles.homeButton}>
        <img src={home} alt="Início" className={styles.homeIcon} />
      </button>

      <img src={logo} alt="Callebaut Logo" className={styles.logo} />

      <h1 className={styles.title}>Toque no tema escolhido</h1>

      <div className={styles.topicsGrid}>
        {topics.map((topic) => (
          <button
            key={topic.title}
            className={styles.topicItem}
            onClick={() => handleTopicClick(topic.title)}
          >
            <img src={topic.icon} alt={topic.title} className={styles.topicIcon} />
            <h2 className={styles.topicTitle}>{topic.title}</h2>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dicas; 