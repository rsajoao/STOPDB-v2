import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import { UserProvider } from './contexts/UserContext';
import { DataProvider } from './contexts/DataContext';
import Header from './components/Header';
import Account from './components/account/Account';
import Feed from './components/Feed/Feed';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <DataProvider>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="acesso/*" element={<Login />} />
                <Route path="conta/*" element={<Account />} />
              </Routes>
            </main>
          </DataProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
