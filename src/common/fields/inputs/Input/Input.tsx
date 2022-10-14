import React, { HTMLProps } from 'react';
import './Input.css';

interface InputProps extends HTMLProps<HTMLInputElement> {
  // используем наследование стобы взять все пропсы  для инпута готовые
  isError?: boolean; // свои поля для вывода ошибки
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({ isError = false, helperText, ...props }) => {
  // props находится в <InputProps>
  const className = isError ? 'input_error' : ''; // для добавления класса ошибки

  return (
    <>
      <input {...props} className={className} />
      {isError && helperText && <div className='input_helper_text'>{helperText}</div>}{' '}
      {/* лучше чем тернарный оператор */}
    </>
  );
};
