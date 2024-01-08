import React from 'react';
import { UserData } from '../components/interfaces/User';
import {
  TOKEN_POST,
  TOKEN_VALIDATE_POST,
  USER_GET,
} from '../components/helpers/Api';
import { useNavigate } from 'react-router-dom';

interface UserContextProps {
  userLogin: (username: string, password: string) => Promise<void>;
  userLogout: () => Promise<void>;
  userData: UserData | null;
  error: string;
  login: boolean;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = React.createContext<UserContextProps>(
  {} as UserContextProps,
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, setUserData] = React.useState<UserData | null>(null);
  const [error, setError] = React.useState<string>('');
  const [login, setLogin] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const getUser = React.useCallback(
    async (token: string) => {
      const { url, options } = USER_GET(token);
      const response = await fetch(url, options);
      const json = await response.json();

      if ('error' in json && 'message' in json) setError(json.message);
      else {
        setUserData(json);
        setLogin(true);
        navigate('/conta');
      }
    },
    [navigate],
  );

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError('');
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido');
          await getUser(token);
        } catch (err) {
          setError((err as Error).message);
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [getUser]);

  async function userLogin(username: string, password: string): Promise<void> {
    try {
      setError('');
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      const json = await response.json();

      if (!response.ok) {
        if ('message' in json) throw new Error(json.message);
        else throw new Error('Erro inesperado');
      }

      if ('token' in json && typeof json.token === 'string')
        window.localStorage.setItem('token', json.token);

      await getUser(json.token);
      navigate('/conta');
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = React.useCallback(async function (): Promise<void> {
    setUserData(null);
    setError('');
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
  }, []);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
        userData,
        error,
        login,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
