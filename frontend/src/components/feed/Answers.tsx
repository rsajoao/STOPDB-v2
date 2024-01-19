import React from 'react';
import styles from './Answers.module.css';
import { DataContext } from '../../contexts/DataContext';
import Rhombus from '../SVG/Rhombus';
import Heart from '../SVG/Heart';
import { Link } from 'react-router-dom';

const Answers = () => {
  const { answers } = React.useContext(DataContext);

  React.useEffect(() => console.log(answers[0]), [answers]);

  return (
    <div className={styles.container}>
      <h1 className="title">Últimas respostas</h1>
      <div className={styles.answers}>
        {answers.filter((_, index) => index < 16).map((answer) => (
          <div className={styles.answer} key={answer.id}>
            <h3>
              {answer.answer}
              <Rhombus size="1" color={answer.rare ? 'gold' : 'silver'} />
            </h3>
            <Link
              to={`/categoria/${String(answer.categoryId).padStart(3, '0')}`}
              className={styles.category}
            >
              {answer.category}
            </Link>
            <Link
              to={`/usuario/${answer.username}`}
              className={styles.username}
            >
              @{answer.username}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Answers;
