import React from 'react';

interface DataContextProps {}

export const DataContext = React.createContext<DataContextProps>(
  {} as DataContextProps,
);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const context: DataContextProps = {};

  return (
    <DataContext.Provider value={context}>{children}</DataContext.Provider>
  );
};
