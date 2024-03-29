export type Letter =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z';

export type Status = 'pending' | 'accepted' | 'rejected';

export interface IAnswer {
  id: number;
  answer: string;
  likes: number[];
  views: number;
  categoryId: number;
  category: string;
  rare?: boolean;
  userId?: number;
  status?: Status;
  public?: boolean;
  letter?: Letter;
  createdAt?: string;
  user?: string;
}