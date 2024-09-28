import React from 'react';
import styles from './Button.module.css';

const Button = ({ isActive }) => (
  <button className={isActive ? styles.buttonActive : styles.button}>
    {isActive ? 'Active' : 'Inactive'}
  </button>
);

export default Button;
