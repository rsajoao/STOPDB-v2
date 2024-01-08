import { FetchOptions, FetchParameters } from '../interfaces/Fetch';

export const API_URL = 'http://localhost:3001';

export function TOKEN_POST(body: {
  username: string;
  password: string;
}): FetchParameters {
  return {
    url: `${API_URL}/auth/get-token`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token: string): FetchParameters {
  return {
    url: `${API_URL}/auth/validate`,
    options: {
      method: 'POST',
      headers: {
        Authorization: `${token}`,
      },
    },
  };
}

export function USER_GET(token: string): FetchParameters {
  return {
    url: `${API_URL}/user/get-user`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
      },
    },
  };
}

export function USER_POST(body: Record<string, string>): FetchParameters {
  return {
    url: `${API_URL}/user/create`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function PASSWORD_LOST(body: Record<string, string>): FetchParameters {
  return {
    url: `${API_URL}/user/recover`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}






