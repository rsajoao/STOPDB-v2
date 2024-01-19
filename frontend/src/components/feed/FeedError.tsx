import React from 'react';
import styles from './FeedError.module.css';
import Broken from '../SVG/Broken';

const FeedError = () => {
  return (
    <div className={styles.error}>
      <h1 className="title">
        ...Oops!
        <Broken size="5" />
      </h1>
      <h2>Parece que estamos enfrentando problemas para carregar a página.</h2>
      <p>
        Pedimos desculpas por isso e solicitamos que tente acessar novamente em
        alguns instantes. Tenha certeza de que estamos trabalhando para
        solicionar o problema o mais rápido o possível. Agradecemos a
        compreensão.
      </p>
    </div>
  );
};

export default FeedError;
