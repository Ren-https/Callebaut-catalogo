import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/VideoPlayer.module.css';
import logo from '../assets/icones/logo_bc.png';
import setaVoltar from '../assets/icones/seta.png';
import home from '../assets/icones/home.png';

interface VideoPlayerProps {
  onBack: () => void;
  onHome: () => void;
  videoTitle: string;
  videoSource: string;
  isMuted: boolean;
  onVideoEnd: () => void;
  /* fromHome?: boolean; */
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  onBack,
  onHome,
  videoTitle,
  videoSource,
 /*  fromHome = false, */
  isMuted,
  onVideoEnd
}) => {
  /* const [showContent, setShowContent] = useState(() => !fromHome);
    const [shouldShowVideo, setShouldShowVideo] = useState(() => fromHome) */
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSkipVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = videoRef.current.duration;
      onVideoEnd();
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      console.log("Carregando vídeo:", videoSource);
      videoRef.current.load();
      // Tenta iniciar a reprodução
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay foi impedido:", error);
        });
      }

      

      // Adicionar listeners para debug
      videoRef.current.addEventListener('ended', () => {
        console.log("Vídeo terminou - Evento 'ended' disparado");
        onVideoEnd();
      });

      videoRef.current.addEventListener('timeupdate', () => {
        if (videoRef.current) {
          const timeLeft = videoRef.current.duration - videoRef.current.currentTime;
          if (timeLeft < 0.5) {
            console.log("Vídeo próximo do fim:", timeLeft, "segundos restantes");
          }
        }
      });
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('ended', () => { });
        videoRef.current.removeEventListener('timeupdate', () => { });
      }
    };
  }, [videoSource, onVideoEnd]);

  /* const handleSkipVideo = () => {
        setShowContent(true);
        setShouldShowVideo(false);
      }; */

  return (
    <div className={styles.container}>
      <button onClick={onBack} className={styles.backButton}>
        <img src={setaVoltar} alt="Voltar" className={styles.backIcon} />
      </button>

      <button onClick={onHome} className={styles.homeButton}>
        <img src={home} alt="Início" className={styles.homeIcon} />
      </button>

      <img src={logo} alt="Callebaut Logo" className={styles.logo} />

      <div className={styles.videoContainer}>
        <h1 className={styles.title}>{videoTitle}</h1>
        <video
          ref={videoRef}
          className={styles.videoPlayer}
          playsInline
          preload="auto"
          webkit-playsinline="true"
          autoPlay
          muted={isMuted}
          onEnded={onVideoEnd}
          onError={(e) => console.error("Erro no vídeo:", e)}
        >
          <source src={videoSource} type="video/webm" />
          <source src={videoSource.replace('.webm', '.mp4')} type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeos.
        </video>
      </div>
      <button onClick={handleSkipVideo} className={styles.skipButton}>
        Pular vídeo
      </button>
    </div>
  );
};

export default VideoPlayer; 