export interface Err {
  code: number;
  error: string;
}

export interface ErrTypes extends Err {
  messages: string[];
}

export interface ErrObject extends Err {
  message: string;
}