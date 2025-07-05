import React from 'react';
import styles from './loadingSpinner.module.scss';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  color = '#8E9A82' 
}) => {
  return (
    <div 
      className={`${styles.spinner} ${styles[`spinner--${size}`]}`}
      style={{ borderTopColor: color }}
    />
  );
}; 