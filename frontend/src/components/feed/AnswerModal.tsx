import React from 'react';
import styles from './AnswerModal.module.css';
import { Answer } from '../../interfaces/Answer';
import useFetch from '../../hooks/useFetch';
import { ANSWER_GET } from '../../helpers/Api';

const AnswerModal: React.FC<{ answer: Answer }> = ({ answer }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = ANSWER_GET(answer.id);
  }, [answer.id]);

  return <div></div>;
};

export default AnswerModal;
