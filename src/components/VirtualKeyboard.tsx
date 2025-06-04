import React from 'react';
import styles from './VirtualKeyboard.module.css';

interface VirtualKeyboardProps {
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
  onEnter: () => void;
}

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  onKeyPress,
  onBackspace,
  onEnter
}) => {
  const rows = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '@'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', '.', '_', '-']
  ];

  const handleKeyPress = (key: string) => {
    onKeyPress(key);
  };

  const handleSpecialKey = (action: () => void) => {
    action();
  };

  const preventPropagation = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div 
      className={styles.keyboard}
      onClick={preventPropagation}
      onTouchStart={preventPropagation}
    >
      {rows.map((row, rowIndex) => (
        <div 
          key={rowIndex} 
          className={styles.row}
          onClick={preventPropagation}
        >
          {row.map((key) => (
            <button
              key={key}
              className={styles.key}
              onClick={() => handleKeyPress(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
      <div 
        className={styles.row}
        onClick={preventPropagation}
      >
        <button
          className={`${styles.key} ${styles.specialKey}`}
          onClick={() => handleSpecialKey(onBackspace)}
        >
          ⌫
        </button>
        <button
          className={`${styles.key} ${styles.specialKey}`}
          onClick={() => handleSpecialKey(onEnter)}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default VirtualKeyboard; 