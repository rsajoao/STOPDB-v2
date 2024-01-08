import React from 'react';
import Head from '../../helpers/Head';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import Input from '../forms/Input';
import Button from '../forms/Button';
import { PASSWORD_LOST } from '../../helpers/Api';

const LoginRecover = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  const validateUser = (user: string) => {
    const regex = /^[a-zA-Z][a-zA-Z0-9@._-]{3,}$/
    return regex.test(user);
  }


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (validateUser(login.value)) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('recuperar', 'redefinir'),
      });
      await request(url, options);
    }
  }

  return (
    <div>
      <Head title="Recuperar" />
      <h1 className="title">Recuperar</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>E-mail enviado.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="E-mail/Usuário" type="text" name="login" {...login} />
          <div className="errorContainer">
            {error && <p className="error">{error}</p>}
          </div>
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button disabled={!validateUser(login.value)}>Enviar e-mail de recuperação</Button>
          )}
        </form>
      )}
    </div>
  );
};

export default LoginRecover;
