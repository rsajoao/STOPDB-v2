export type Role = 'admin' | 'user';

export interface NewUser {
  id: number;
  username: string;
  email: string;
}