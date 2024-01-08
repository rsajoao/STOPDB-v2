import React from 'react';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../contexts/UserContext';
import useFetch from '../../hooks/useFetch';
import Head from '../../helpers/Head';
import Input from '../forms/Input';
import Button from '../forms/Button';
import { USER_POST } from '../../helpers/Api';

const LoginCreate = () => {
  const username = useForm('username');
  const email = useForm('email');
  const password = useForm('password');
  const [disable, setDisable] = React.useState<boolean>(true);
  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  React.useEffect(() => {
    setDisable(
      (_) => !(username.validate() && email.validate() && password.validate()),
    );
  }, [username, email, password]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response, json } = await request(url, options);

    if (response && response.ok) userLogin(username.value, password.value);
  }

  return (
    <section>
      <Head title="Cadastrar" />
      <h1 className="title">Login Create</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        <div className="errorContainer">
          {error && <p className="error">{error}</p>}
        </div>
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button disabled={disable}>Cadastrar</Button>
        )}
      </form>
    </section>
  );
};

export default LoginCreate;
