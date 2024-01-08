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

export function THEMES_GET(): FetchParameters {
  return {
    url: `${API_URL}/theme/get-all`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export function ANSWERS_GET(
  params: { page?: string; results?: string } = {},
): FetchParameters {
  params.page = params.page || '1';
  params.results = params.results || '12';

  const queryString = `page=${params.page}&results=${params.results}`;

  return {
    url: `${API_URL}/answer/get-public?${queryString}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export function CATEGORY_ANSWERS(
  params: { categoryId?: string; userId?: string } = {},
): FetchParameters {
  params.categoryId = params.categoryId || '0';
  params.userId = params.userId || '0';

  const queryString = `categoryId=${params.categoryId}&userId=${params.userId}`;
  const token = window.localStorage.getItem('token') || '';

  return {
    url: `${API_URL}/answer/get-category-answers?${queryString}`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
      },
    },
  };
}

