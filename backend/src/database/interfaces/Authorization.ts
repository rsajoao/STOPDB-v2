export interface UserPayload {
  id: number;
  email: string;
  role: 'admin' | 'user';
  username: string;
}

export interface UserError {
  error: string;
}
