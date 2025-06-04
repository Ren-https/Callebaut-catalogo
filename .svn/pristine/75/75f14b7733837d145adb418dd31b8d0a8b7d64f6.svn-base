import React from 'react';
import styles from '../styles/CallebautTopics.module.css';
import logo from '../assets/icones/logo_bc.png';
import setaVoltar from '../assets/icones/seta.png';
import home from '../assets/icones/home.png';
import HISTORIA_ICON from '../assets/icones/iconehistoria.png';
import SUSTENTABILIDADE_ICON from '../assets/icones/iconesustentabilidade.png';
import EMBALAGENS_ICON from '../assets/icones/iconeembalagens.png';
import ORIGEM_ICON from '../assets/icones/deonde.png';

interface CallebautTopicsProps {
  onBack: () => void;
  onSelectTopic: (topic: string) => void;
  onHome: () => void;
}

const CallebautTopics: React.FC<CallebautTopicsProps> = ({ onBack, onSelectTopic, onHome }) => {
  const topics = [
    {
      title: 'Nossa história',
      icon: HISTORIA_ICON,
    },
    {
      title: 'Sustentabilidade',
      icon: SUSTENTABILIDADE_ICON,
    },
    {
      title: 'Embalagens',
      icon: EMBALAGENS_ICON,
    },
    {
      title: 'De onde vem o chocolate',
      icon: ORIGEM_ICON,
    },
  ];

  return (
    <div className={styles.container}>
      <button onClick={onBack} className={styles.backButton}>
        <img src={setaVoltar} alt="Voltar" className={styles.backIcon} />        
      </button>
      <img src={logo} alt="Callebaut Logo" className={styles.logo} />
      <button onClick={onHome} className={styles.homeButton}>
        <img src={home} alt="Início" className={styles.homeIcon} />
      </button>

      <h1 className={styles.title}>Toque em um tema</h1>

      <div className={styles.topicsGrid}>
        {topics.map((topic) => (
          <button
            key={topic.title}
            className={styles.topicItem}
            onClick={() => onSelectTopic(topic.title)}
          >
            <img src={topic.icon} alt={topic.title} className={styles.topicIcon} />
            <h2 className={styles.topicTitle}>{topic.title}</h2>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CallebautTopics; 