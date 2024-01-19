import React from 'react';
import { DataContext } from '../../contexts/DataContext';
import FeedError from './FeedError';
import styles from './Feed.module.css';
import Themes from './Themes';
import Answers from './Answers';
import Search from './Search';
import Head from '../../helpers/Head';


const Feed = () => {
  const { themes, categories, answers, loading, error } =
    React.useContext(DataContext);

  if (loading) return <p>Carregando</p>;
  if (
    error ||
    themes.length === 0 ||
    categories.length === 0 ||
    answers.length === 0
  )
    return <FeedError />;
  else
    return (
      <div className={styles.feed}>
        <Head title="Início"/>
        <Search />
        <section className={styles.feedData}>
          <Themes/>
          <Answers />
        </section>
      </div>
    );
};

export default Feed;
