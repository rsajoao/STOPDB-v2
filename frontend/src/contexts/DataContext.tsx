import React from 'react';
import { ANSWERS_GET, CATEGORIES_GET, THEMES_GET } from '../helpers/Api';
import { Theme } from '../interfaces/Theme';
import { Category } from '../interfaces/Category';
import { Answer } from '../interfaces/Answer';

interface DataContextProps {
  themes: Theme[];
  categories: Category[];
  answers: Answer[];
  loading: boolean;
  error: string;
}

export const DataContext = React.createContext<DataContextProps>(
  {} as DataContextProps,
);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [themes, setThemes] = React.useState<Theme[]>([]);
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [answers, setAnswers] = React.useState<Answer[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const getThemes = React.useCallback(async function () {
    setError(null);
    const { url, options } = THEMES_GET();
    const response = await fetch(url, options);
    const json = await response.json();

    if (!response.ok && 'message' in json) throw new Error(json.message);
    setThemes(json);
  }, []);

  const getCategories = React.useCallback(async function () {
    setError(null);
    const { url, options } = CATEGORIES_GET();
    const response = await fetch(url, options);
    const json = await response.json();

    if (!response.ok && 'message' in json) throw new Error(json.message);
    setCategories(json);
  }, []);

  const getAnswers = React.useCallback(async function () {
    setError(null);
    const { url, options } = ANSWERS_GET();
    const response = await fetch(url, options);
    const json = await response.json();

    if (!response.ok && 'message' in json) throw new Error(json.message);
    setAnswers(json);
  }, []);

  React.useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        await getThemes();
        await getCategories();
        await getAnswers();
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [getAnswers, getCategories, getThemes]);

  return (
    <DataContext.Provider
      value={
        {
          themes,
          categories,
          answers,
          loading,
          error,
        } as DataContextProps
      }
    >
      {children}
    </DataContext.Provider>
  );
};
