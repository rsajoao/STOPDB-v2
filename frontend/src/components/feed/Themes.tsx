import React from 'react';
import styles from './Themes.module.css';
import { DataContext } from '../../contexts/DataContext';
import { Link } from 'react-router-dom';

const Themes = () => {
  const { themes } = React.useContext(DataContext);
  const [current, setCurrent] = React.useState<string>('');

  function handleClick(e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    const theme = e.currentTarget.innerText;

    if (current === theme) setCurrent('');
    else setCurrent(theme);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLElement>): void {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      const theme = e.currentTarget.innerText;
      if (current === theme) setCurrent('');
      else setCurrent(theme);
    }
  }

  return (
    <aside className={styles.aside}>
      <h1 className="title">Temas</h1>

      {themes.map((theme) => (
        <div
          key={theme.id}
          className={`${styles.themes} ${theme.name === current && styles.selected}`}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
        >
          <h2 className={styles.name} tabIndex={0}>{theme.name}</h2>
          {current === theme.name && (
            <div className={styles.categories}>
              {theme.categories.map((category) => (
                <Link
                  to={`/categoria/${String(category.id).padStart(3, '0')}`}
                  key={category.id}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default Themes;
