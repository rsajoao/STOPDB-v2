import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginRecover from './LoginRecover';
import NotFound from '../../helpers/NotFound';

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/entrar" Component={LoginForm} />
          <Route path="/cadastrar" Component={LoginCreate} />
          <Route path="/recuperar" Component={LoginRecover} />
          <Route path="/*" Component={NotFound} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
