import React from 'react';

interface DataContextProps {}

export const DataContext = React.createContext<DataContextProps>(
  {} as DataContextProps,
);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [themes, setThemes] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const getThemes = React.useCallback(async function () {

  }, []);

  const getCategories = React.useCallback(async function () {

  }, []);

  const getAnswers = React.useCallback(async function () {
    
  }, []);

  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};
