import styles from './Header.module.css';
import React from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import Hand from './SVG/Hand';
import Logout from './SVG/Logout';

const Header = () => {
  const { userData, userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function logout(): void {
    userLogout();
    navigate('/');
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <Hand color="#DC143C" size="40" />
        </Link>
        {userData ? (
          <>
            <span className={styles.username}>@{userData.username}</span>
            <button className={styles.logout} onClick={logout}>
              <Logout size="1" color="crimson" />
              <span>Sair</span>
            </button>
          </>
        ) : (
          <div className={styles.sign}>
            <Link to="/acesso/entrar" className={styles.signin}>
              Entrar
            </Link>
            <span> | </span>
            <Link to="/acesso/cadastrar" className={styles.signup}>
              Cadastrar
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
