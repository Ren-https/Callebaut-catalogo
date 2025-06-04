import React, { useState, useRef } from 'react';
import styles from './EmailModal.module.css';
import VirtualKeyboard from './VirtualKeyboard';
import { saveEmail } from '../services/emailService';

interface EmailModalProps {
  onClose: () => void;
  recipeName?: string;
}

const EmailModal: React.FC<EmailModalProps> = ({ onClose, recipeName }) => {
  const [email, setEmail] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!email.includes('@') || !email.includes('.')) {
      setError('Por favor, insira um email válido.');
      return;
    }

    setIsSaving(true);
    setError('');

    try {
      const success = await saveEmail(email, recipeName);
      if (success) {
        onClose();
      } else {
        setError('Não foi possível salvar seu e-mail. Tente novamente.');
      }
    } catch (err) {
      setError('Ocorreu um erro. Tente novamente.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleModalClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
  };

  const handleOverlayClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={styles.modalOverlay} 
      onClick={handleOverlayClick}
      onTouchStart={handleOverlayClick}
    >
      <div 
        className={styles.modalContent}
        onClick={handleModalClick}
        onTouchStart={handleModalClick}
      >
        <button 
          className={styles.closeButton} 
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          X
        </button>
        
        <h2 className={styles.title}>Quer receber mais receitas como essa?</h2>
        <p className={styles.subtitle}>É só colocar seu e-mail no campo abaixo.</p>
        
        <form 
          onSubmit={handleSubmit} 
          className={styles.form}
          onClick={handleModalClick}
          onTouchStart={handleModalClick}
        >
          <input
            ref={inputRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setShowKeyboard(true)}
            placeholder="E-mail"
            className={styles.input}
            required
            disabled={isSaving}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSaving}
          >
            {isSaving ? 'ENVIANDO...' : 'ENVIAR'}
          </button>

          {showKeyboard && (
            <div 
              className={styles.keyboardContainer}
              onClick={handleModalClick}
              onTouchStart={handleModalClick}
            >
              <VirtualKeyboard
                onKeyPress={(key) => {
                  setEmail(prev => prev + key);
                  if (inputRef.current) {
                    inputRef.current.focus();
                  }
                }}
                onBackspace={() => {
                  setEmail(prev => prev.slice(0, -1));
                  if (inputRef.current) {
                    inputRef.current.focus();
                  }
                }}
                onEnter={() => {
                  if (email.includes('@') && email.includes('.')) {
                    handleSubmit(new Event('submit') as any);
                  }
                }}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default EmailModal; 