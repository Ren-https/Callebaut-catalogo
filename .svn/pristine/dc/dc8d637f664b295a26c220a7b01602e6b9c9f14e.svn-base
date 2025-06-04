import React, { useState, useEffect } from 'react';
import './RecipeDetail.css';
import setaVoltar from '../assets/icones/seta.png';
import logo from '../assets/icones/logo_bc.png';
import homeIcon from '../assets/icones/home.png';
import EmailModal from './EmailModal';

interface RecipeDetailProps {
  recipeName: string;
  recipeImage: string;
  qrCodeImage: string;
  onBack: () => void;
  onHome: () => void;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ 
  recipeName,
  recipeImage, 
  qrCodeImage, 
  onBack, 
  onHome 
}) => {
  const [showEmailModal, setShowEmailModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmailModal(true);
    }, 15000); // 15 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="recipe-detail-container" style={{ backgroundColor: '#ecebe4' }}>
      <div className="header">
        <button onClick={onBack} className="backButton">
          <img src={setaVoltar} alt="Voltar" className="backIcon" />
        </button>
        <img src={logo} alt="Callebaut Logo" className="logoIcon" />
        <button onClick={onHome} className="homeButton">
          <img src={homeIcon} alt="Home" className="homeIcon" />
        </button>
      </div>

      <div className="recipe-content">
        <h1 className="recipe-title">{recipeName}</h1>
        
        <div className="recipe-image-wrapper">
          <img src={recipeImage} alt={recipeName} className="recipe-main-image" />
        </div>

        <div className="qr-code-section">
          <div className="qr-code-wrapper">
            <img src={qrCodeImage} alt="QR Code da receita" className="qr-code-image" />
          </div>
          <p className="qr-instruction">Aponte a câmera do seu celular para ver a receita!</p>
        </div>
      </div>

      {showEmailModal && (
        <EmailModal 
          onClose={() => setShowEmailModal(false)} 
          recipeName={recipeName}
        />
      )}
    </div>
  );
};

export default RecipeDetail;
