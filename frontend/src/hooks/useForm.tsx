import React from 'react';

interface FormHook {
  value: string;
  error: string | null;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  validate: () => boolean;
  onBlur: () => boolean;
}

const types = {
  username: {
    regex: /^[a-zA-Z][a-zA-Z0-9]{3,19}$/,
    message: 'Utilize entre 4 a 20 caracteres entre letras e números apenas'

  },
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um e-mail válido',
  },
  password: {
    regex: /^(?=.*[A-Za-z])(?=.*\d).{6,}$/,
    message: 'A senha precisa ter pelo menos 6 dígitos entre números e letras',
  },
};

const useForm = (type?: 'username' | 'email' | 'password'): FormHook => {
  const [value, setValue] = React.useState<string>('');
  const [error, setError] = React.useState<string | null>(null);

  function validate(value: string): boolean {
    if (!type) return true;

    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    if (error) validate(value);
    setValue(value);
  }

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
