import React from 'react';
import styles from '../styles/QRCode.module.css';
import logo from '../assets/icones/logo_bc.png';
import setaVoltar from '../assets/icones/seta.png';
import home from '../assets/icones/home.png';
import qrcode from '../assets/QR_Codes/academy.png';

interface QRCodeProps {
  onBack: () => void;
  onHome: () => void;
}



const QRCode: React.FC<QRCodeProps> = ({ onBack, onHome }) => {
  return (
    <div className={styles.container}>
      {/* <button onClick={onBack} className={styles.backButton}>
        <img src={setaVoltar} alt="Voltar" className={styles.backIcon} />
      </button> */}

      <button onClick={onHome} className={styles.homeButton}>
        <img src={home} alt="Início" className={styles.homeIcon} />
      </button>

      <img src={logo} alt="Callebaut Logo" className={styles.logo} />

      <div className={styles.content}>
        <h1 className={styles.title}>Aprimore suas habilidades</h1>
        <p className={styles.description}> com a Chocolate Academy</p>
        <div className={styles.qrCodeContainer}>
          <img src={qrcode} alt="QR Code" className={styles.qrCode} />
        </div>
      </div>
    </div>
  );
};

export default QRCode; 