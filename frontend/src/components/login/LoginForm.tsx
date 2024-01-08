import React from 'react';
import useForm from '../../hooks/useForm';
import Head from '../../helpers/Head';
import Input from '../forms/Input';
import Button from '../forms/Button';
import { UserContext } from '../../contexts/UserContext';
import styles from './LoginForm.module.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const { userLogin, error, loading } = React.useContext(UserContext);
  const username = useForm('username');
  const password = useForm('password');
  const [disable, setDisable] = React.useState<boolean>(true);

  React.useEffect(() => {
    setDisable(!(username.validate() && password.validate()));
  }, [username, password, disable]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section>
      <Head title="Entrar"></Head>
      <h1 className="title">Entrar</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="text" {...password} />
        <div className="errorContainer">
          {error && <p className="error">{error}</p>}
        </div>
        {loading ? (
          <Button disabled>Entrando...</Button>
        ) : (
          <Button disabled={disable}>Entrar</Button>
        )}
      </form>
      <Link to="/acesso/recuperar" className={styles.recover}>
        Recuperar a senha
      </Link>
      <div className={styles.create}>
        <h2>Cadastre-se</h2>
        <p>
          Ainda não possui conta? Cadastre-se para adicionar novas respostas.
        </p>
        <Link to="/acesso/cadastrar">
          <Button>Cadastro</Button>
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
