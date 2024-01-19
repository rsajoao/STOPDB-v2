import React from 'react';
import styles from './Search.module.css';
import { DataContext } from '../../contexts/DataContext';
import { Category } from '../../interfaces/Category';
import Button from '../forms/Button';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [value, setValue] = React.useState<string>('');
  const [selected, setSelected] = React.useState<string>('');
  const { categories } = React.useContext(DataContext);
  const [categoriesFiltered, setCategoriesFiltered] =
    React.useState<Category[]>(categories);
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const query = e.target.value.toUpperCase();
    setValue(query);

    const filteredCategories = categories.filter((category) =>
      category.name.toUpperCase().includes(query),
    );
    setCategoriesFiltered(filteredCategories);

    if (filteredCategories.length === 0) {
      setSelected('-1');
    } else {
      setSelected(filteredCategories[0].id.toString());
    }
  }

  function selectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelected(e.target.value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    const { key } = e;
    if (['Enter'].includes(key))
      navigate(`/categoria/${selected.padStart(3, '0')}`);
  }

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Pesquisar Categoria"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        name="search"
        autoComplete="off"
      />
      <div className={styles.box}>
        <select
          id="category-select"
          value={selected}
          onChange={selectChange}
          disabled={categoriesFiltered.length === 0}
        >
          {value === '' && (
            <option value="" disabled hidden>
              Selecione uma categoria
            </option>
          )}
          {categoriesFiltered.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
          {categoriesFiltered.length === 0 && (
            <option key="-1" value="-1" disabled>
              Nenhuma categoria foi encontrada
            </option>
          )}
        </select>
        <button
          className={styles.button}
          disabled={['', '-1'].includes(selected)}
          onClick={() => navigate(`/categoria/${selected.padStart(3, '0')}`)}
        >
          {selected === '-1' ? 'Selecione' : 'Ir'}
        </button>
      </div>
    </div>
  );
};

export default Search;
