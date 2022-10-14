import React from 'react';
import './Button.css';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {} // используем наследование стобы взять все пропсы  для кнопки готовые

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button> {children} </button>;
};
