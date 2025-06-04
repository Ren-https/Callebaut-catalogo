import React, { useState } from 'react';
import styles from '../styles/Embalagens.module.css';
import logo from '../assets/icones/logo_bc.png';
import setaVoltar from '../assets/icones/seta.png';
import home from '../assets/icones/home.png';
import embalagensImage from '../assets/Packs/embalagem.png';

import modalNumeros from '../assets/numeros.png';
import modalFluidez from '../assets/fluidez.png';
import modalPorcentagem from '../assets/porcentagem.png';
import gotaCheia from '../assets/icones/gotafill.png';
import gotaVazia from '../assets/icones/gotanofill.png';

interface EmbalagensProps {
  onBack: () => void;
  onHome: () => void;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  headerImage?: string;
  children: React.ReactNode;
}

type ModalKey = 'OS NÚMEROS' | 'FLUIDEZ DO CHOCOLATE' | 'PORCENTAGEM DE CACAU';

interface ModalContent {
  title: string;
  headerImage: string;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, headerImage, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {headerImage && (
          <>
            <div className={styles.modalImageHeader}>
              <img src={headerImage} alt={title} className={styles.modalHeaderImage} />
            </div>
            <button onClick={onClose} className={styles.closeButton}>X</button>
          </>
        )}
        <div className={styles.modalHeader}>
          <h2>{title}</h2>
        </div>
        <div className={styles.modalBody}>
          {children}
        </div>
      </div>
    </div>
  );
};

const Embalagens: React.FC<EmbalagensProps> = ({ onBack, onHome }) => {
  const [selectedModal, setSelectedModal] = useState<ModalKey | null>(null);

  const renderFluidityDots = (filledCount: number) => {
    return (
      <div className={styles.dotsContainer}>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <img
            key={index}
            src={index < filledCount ? gotaCheia : gotaVazia}
            alt={index < filledCount ? 'Gota preenchida' : 'Gota vazia'}
            className={styles.dropIcon}
          />
        ))}
      </div>
    );
  };

  const modalContent: Record<ModalKey, ModalContent> = {
    'OS NÚMEROS': {
      title: 'OS NÚMEROS',
      headerImage: modalNumeros,
      content: (
        <div className={styles.modalInfo}>
          <h3>A linha Finest Belgian segue um sistema de classificação original.</h3>
          <div className={styles.section}>
            <h4>O PRIMEIRO NÚMERO</h4>
            <p>8 - significa chocolate</p>
            <p>7 - significa chocolate com intenso sabor de cacau</p>
          </div>
          <div className={styles.section}>
            <h4>O SEGUNDO NÚMERO</h4>
            <p>0 ou ímpares - chocolate amargo</p>
            <p>2 ou pares - chocolate ao leite</p>
          </div>
          <div className={styles.section}>
            <h4>O TERCEIRO NÚMERO (CASO TENHA)</h4>
            <p>Inicia a contagem em 0 e indica a ordem histórica da receita.</p>
          </div>
        </div>
      )
    },
    'FLUIDEZ DO CHOCOLATE': {
      title: 'FLUIDEZ DO CHOCOLATE',
      headerImage: modalFluidez,
      content: (
        <div className={styles.modalInfo}>
          <h3>As gotinhas indicam a fluidez do chocolate para as diferentes aplicações.</h3>
          <div className={styles.fluiditySection}>
            <div className={styles.fluidityItem}>
              {renderFluidityDots(1)}
              <p>Fluidez muito baixa. Seu chocolate é ideal para ganaches e decorações;</p>
            </div>
            <div className={styles.fluidityItem}>
              {renderFluidityDots(2)}
              <p>Fluidez baixa. Próprio para moldar figuras ocas;</p>
            </div>
            <div className={styles.fluidityItem}>
              {renderFluidityDots(3)}
              <p>Fluidez padrão. Produto mais versátil, adequado para qualquer aplicação;</p>
            </div>
            <div className={styles.fluidityItem}>
              {renderFluidityDots(4)}
              <p>Fluidez alta. Para produtos banhados e moldados com casca fina;</p>
            </div>
            <div className={styles.fluidityItem}>
              {renderFluidityDots(5)}
              <p>Fluidez muito alta. Ideal para produtos banhados com casca muito fina.</p>
            </div>
          </div>
        </div>
      )
    },
    'PORCENTAGEM DE CACAU': {
      title: 'PORCENTAGEM DE CACAU',
      headerImage: modalPorcentagem,
      content: (
        <div className={styles.modalInfo}>
          <h3>Esse número indica a porcentagem de cacau do chocolate.</h3>
          <p>A porcentagem de cacau é um indicador importante da intensidade e sabor do chocolate.</p>
        </div>
      )
    }
  };

  const topics = [
    {
      title: 'OS NÚMEROS' as ModalKey,
      onClick: () => setSelectedModal('OS NÚMEROS')
    },
    {
      title: 'FLUIDEZ DO CHOCOLATE' as ModalKey,
      onClick: () => setSelectedModal('FLUIDEZ DO CHOCOLATE')
    },
    {
      title: 'PORCENTAGEM DE CACAU' as ModalKey,
      onClick: () => setSelectedModal('PORCENTAGEM DE CACAU')
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={onBack} className={styles.backButton}>
          <img src={setaVoltar} alt="Voltar" className={styles.backIcon} />
        </button>

        <img src={logo} alt="Callebaut Logo" className={styles.logo} />

        <button onClick={onHome} className={styles.homeButton}>
          <img src={home} alt="Início" className={styles.homeIcon} />
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.leftSection}>
          {topics.map((topic, index) => (
            <button
              key={index}
              className={styles.topicButton}
              onClick={topic.onClick}
            >
              {topic.title}
            </button>
          ))}
        </div>

        <div className={styles.rightSection}>
          <img
            src={embalagensImage}
            alt="Embalagem Callebaut"
            className={styles.packageImage}
          />
        </div>
      </div>

      {selectedModal && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedModal(null)}
          title={modalContent[selectedModal].title}
          headerImage={modalContent[selectedModal].headerImage}
        >
          {modalContent[selectedModal].content}
        </Modal>
      )}
    </div>
  );
};

export default Embalagens;