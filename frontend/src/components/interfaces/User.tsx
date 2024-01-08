//Context Interfaces;
export interface UserData {
  id: number;
  email: string;
  role: 'admin' | 'user';
  username: string;
}