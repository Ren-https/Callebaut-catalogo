import React, { useState } from 'react';
import './ChocolateColors.css';
import amargo from '../assets/Packs/811.png';
import aoLeite from '../assets/Packs/823.png';
import branco from '../assets/Packs/velvet.png';
import gold from '../assets/Packs/gold.png';
import ruby from '../assets/Packs/rb2.png';
import ChocolateDetail from './ChocolateDetail';
import WhiteChocolateDetail from './WhiteChocolateDetail';
import MilkChocolateDetail from './MilkChocolateDetail';
import GoldChocolateDetail from './GoldChocolateDetail';
import RubyChocolateDetail from './RubyChocolateDetail';
import setaVoltar from '../assets/icones/seta.png';
import logo from '../assets/icones/logo_bc.png';
import homeIcon from '../assets/icones/home.png';

interface Chocolate {
  name: string;
  image: string;
}

interface ChocolateColorsProps {
  onBack: () => void;
  onHome: () => void;
  soundPreference: 'com-som' | 'sem-som';
}

const ChocolateColors: React.FC<ChocolateColorsProps> = ({ onBack, onHome, soundPreference }) => {
  const [selectedChocolate, setSelectedChocolate] = useState<string | null>(null);

  const chocolates: Chocolate[] = [
    { name: 'Amargo', image: amargo },
    { name: 'Ao leite', image: aoLeite },
    { name: 'Branco', image: branco },
    { name: 'Gold', image: gold },
    { name: 'Ruby', image: ruby },
  ];

  if (selectedChocolate === 'Amargo') {
    return <ChocolateDetail onBack={() => setSelectedChocolate(null)} onHome={onHome} soundPreference={soundPreference} />;
  }

  if (selectedChocolate === 'Branco') {
    return <WhiteChocolateDetail onBack={() => setSelectedChocolate(null)} onHome={onHome} soundPreference={soundPreference} />;
  }

  if (selectedChocolate === 'Ao leite') {
    return <MilkChocolateDetail onBack={() => setSelectedChocolate(null)} onHome={onHome} soundPreference={soundPreference} />;
  }

  if (selectedChocolate === 'Gold') {
    return <GoldChocolateDetail onBack={() => setSelectedChocolate(null)} onHome={onHome} soundPreference={soundPreference} />;
  }

  if (selectedChocolate === 'Ruby') {
    return <RubyChocolateDetail onBack={() => setSelectedChocolate(null)} onHome={onHome} soundPreference={soundPreference} />;
  }

  return (
    <div className="container" style={{ backgroundColor: '#ecebe4', width: '100%' }}>
      <div className="header">
        <button onClick={onBack} className="backButton">
          <img src={setaVoltar} alt="Voltar" className="backIcon" />
        </button>
        <img src={logo} alt="Callebaut Logo" className="logoIcon" />
        <button onClick={onHome} className="homeButton">
          <img src={homeIcon} alt="Home" className="homeIcon" />
        </button>
      </div>

      <div className="chocolate-grid">
        {chocolates.map((chocolate) => (
          chocolate.name === 'Ruby' ? (
            <div 
              key={chocolate.name} 
              className="chocolate-card ruby-card"
              onClick={() => setSelectedChocolate(chocolate.name)}
            >
              <img src={chocolate.image} alt={`Chocolate ${chocolate.name}`} />
              <h3>{chocolate.name}</h3>
            </div>
          ) : (
            <div 
              key={chocolate.name} 
              className="chocolate-card"
              onClick={() => setSelectedChocolate(chocolate.name)}
            >
              <img src={chocolate.image} alt={`Chocolate ${chocolate.name}`} />
              <h3>{chocolate.name}</h3>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default ChocolateColors; 