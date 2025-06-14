import React from 'react';
import styles from '../styles/CallebautTopics.module.css';
import logo from '../assets/icones/logo_bc.png';
import setaVoltar from '../assets/icones/seta.png';
import home from '../assets/icones/home.png';
import origemImage from '../assets/icones/origem.png';
import QRCODE from '../assets/QR_Codes/deondevem.png'
import DeOndeVemIcon from '../assets/icones/icone de onde vem.png';


interface DeOndeVemProps {
  onBack: () => void;
  onHome: () => void;
}

const DeOndeVem: React.FC<DeOndeVemProps> = ({ onBack, onHome }) => {
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
        <img src={origemImage} alt="De Onde Vem o Chocolate" className={styles.contentImage} />
        <h1 className={styles.contentTitledeonde}>
          <img src={DeOndeVemIcon} alt="De Onde Vem Ícone" style={{ height: 70, marginRight: '15px' }} />
          DE ONDE VEM O CHOCOLATE</h1>
        <p className={styles.contentText}>
          O chocolate Callebaut começa sua jornada nas fazendas de cacau
          cuidadosamente selecionadas. Trabalhamos com produtores dedicados
          em regiões tropicais ao redor do mundo, onde o clima e o solo
          são ideais para o cultivo do cacau. <br />
          Da colheita à fermentação, da secagem à torrefação, cada etapa
          é monitorada para garantir que apenas os melhores grãos de cacau
          sejam transformados em nosso chocolate excepcional, seguindo
          a tradição belga desde 1911.
        </p>
      
      </div>
      <div className={styles.qrCodeContainer}>
        <img src={QRCODE} alt="QR Code Nossa História" className={styles.qrCodeHistoria} />
        <p className={styles.qrCodeText}>Escaneie o QR Code e veja o caminho completo do nosso cacau.</p>
      </div>
    </div>
  );
};

export default DeOndeVem; 