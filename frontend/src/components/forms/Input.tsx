import React, { ReactElement } from 'react';
import styles from './Input.module.css';
import { InputProps } from '../../interfaces/Props/Input';

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  value,
  error,
  onChange,
  onBlur,
}): ReactElement => {
  return (
    <div className={styles.inputBox}>
      <label htmlFor={name} className={styles.label}>
        {label}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={styles.input}
          autoComplete="off"
        />
      </label>
      <div className="errorContainer">
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Input;
