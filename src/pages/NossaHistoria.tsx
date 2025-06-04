import React from 'react';
import styles from '../styles/CallebautTopics.module.css';
import logo from '../assets/icones/logo_bc.png';
import setaVoltar from '../assets/icones/seta.png';
import home from '../assets/icones/home.png';
import HISTORIA_ICON from '../assets/icones/historia_branco.png';
import historiaImage from '../assets/icones/historia.png';
import QRCODE from '../assets/QR_Codes/nossahistoria.png'

interface NossaHistoriaProps {
  onBack: () => void;
  onHome: () => void;
}

const NossaHistoria: React.FC<NossaHistoriaProps> = ({ onBack, onHome }) => {
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
        <img src={historiaImage} alt="Nossa História" className={styles.contentImage} />
          <h1 className={styles.contentTitle} >
          <img src={HISTORIA_ICON} alt="História Ícone" style={{ height: 70, marginRight: "15px" }} />
            NOSSA HISTÓRIA</h1>
        <p className={styles.contentText}>
          Nossa história começou em 1911. Desde então, os nossos chocolates mais icônicos tornaram-se
          aliados indispensáveis de chefs do mundo todo. Pelo seu sabor original. Pelos resultados finais
          alcançados com eles pelos chefs todos os dias. E por levarem a sustentabilidade no coração.
         <br />
        Tradição, ingredientes de alta qualidade e cuidado desde o cultivo do cacau: aqui é a casa do
        chocolate belga original.</p>
      </div>
    <div className={styles.qrCodeContainer}>
      <img src={QRCODE} alt="QR Code Nossa História" className={styles.qrCodeHistoria} />
      <p className={styles.qrCodeText}>Escaneie o QR Code para conferir nosso portfólio completo.</p>
    </div>
    </div>
      
  );
};

export default NossaHistoria;