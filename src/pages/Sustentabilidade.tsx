import React from 'react';
import styles from '../styles/CallebautTopics.module.css';
import logo from '../assets/icones/logo_bc.png';
import setaVoltar from '../assets/icones/seta.png';
import home from '../assets/icones/home.png';
import sustentabilidadeImage from '../assets/icones/sustentabilidade.png';
import QRCODE from '../assets/QR_Codes/Dicas/sustentabilidade.png'
import SUSTENTABILIDADE_ICON from '../assets/icones/icone sustentabilidade.png';



interface SustentabilidadeProps {
  onBack: () => void;
  onHome: () => void;
}

const Sustentabilidade: React.FC<SustentabilidadeProps> = ({ onBack, onHome }) => {
  return (
    <div className={styles.container}>
      <button onClick={onBack} className={styles.backButton}>
        <img src={setaVoltar} alt="Voltar" className={styles.backIcon} />
      </button>

      <button onClick={onHome} className={styles.homeButton}>
        <img src={home} alt="Início" className={styles.homeIcon} />
      </button>

      <img src={logo} alt="Callebaut Logo" className={styles.logo} />

      <div className={styles.contentCard}>
        <img src={sustentabilidadeImage} alt="Sustentabilidade" className={styles.contentImage} />
        <h1 className={styles.contentTitle}>
          <img src={SUSTENTABILIDADE_ICON} alt="Sustentabilidade Ícone" style={{ height: 105, marginRight: "-15px" }} /> 
          SUSTENTABILIDADE</h1>
        <p className={styles.contentText}>
          Na Callebaut, a sustentabilidade está no coração de tudo o que fazemos. 
          Nosso compromisso vai além da produção de chocolate de qualidade - 
          estamos empenhados em garantir um futuro sustentável para o cacau e 
          suas comunidades produtoras. <br /> Através do nosso programa Cocoa Horizons, trabalhamos diretamente com 
          agricultores para promover práticas agrícolas sustentáveis, melhorar 
          a qualidade de vida das comunidades e garantir a preservação ambiental 
          nas regiões produtoras de cacau.
     

        </p>
      </div>
      <div className={styles.qrCodeContainer}>
      <img src={QRCODE} alt="QR Code Nossa História" className={styles.qrCodeHistoria} />
      <p className={styles.qrCodeText}>Acesse e conheça nossas iniciativas de sustentabilidade.</p>
    </div>
    </div>
  );
};

export default Sustentabilidade; 