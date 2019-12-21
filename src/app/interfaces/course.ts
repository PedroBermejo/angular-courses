export interface Course {
  id: number;
  name: string;
  description: string;
  isTopRated: boolean;
  date: string;
  authors: Author;
  length: number;
}

export interface Author {
  id: number;
  name: string;
  lastName: string;
}
