import React, { useState, useEffect } from 'react';
import styles from '../styles/QRCodePage.module.css';
import logo from '../assets/icones/logo_bc.png';
import setaVoltar from '../assets/icones/seta.png';
import home from '../assets/icones/home.png';
import dicasfim from '../assets/videos/dicas/dica_02.webm';

interface QRCodePageProps {
  onBack: () => void;
  onHome: () => void;
  title: string;
  qrCodeUrl: string;
  soundPreference: 'com-som' | 'sem-som';
  description: string;
}

const QRCodePage: React.FC<QRCodePageProps> = ({ onBack, onHome, title, qrCodeUrl, description, soundPreference }) => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 15000); // 15 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <button onClick={onBack} className={styles.backButton}>
        <img src={setaVoltar} alt="Voltar" className={styles.backIcon} />
      </button>

      <button onClick={onHome} className={styles.homeButton}>
        <img src={home} alt="Início" className={styles.homeIcon} />
      </button>

      <img src={logo} alt="Callebaut Logo" className={styles.logo} />

      {!showVideo && (
        <>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{description}</h2>
        </>
      )}

      {!showVideo ? (
        <>
          <div className={styles.qrCodeContainer}>
            <img src={qrCodeUrl} alt="QR Code" className={styles.qrCode} />
          </div>
          <p className={styles.callToAction}>Acesse o QR Code e confira!</p>
        </>
      ) : (
        <div className={styles.videoContainer}>
          <video 
            autoPlay 
            className={styles.video}
            muted={soundPreference === 'sem-som'}

          >
            <source src={dicasfim} type="video/webm" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      )}
    </div>
  );
};

export default QRCodePage; 