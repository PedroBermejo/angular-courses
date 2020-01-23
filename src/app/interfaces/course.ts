import {Authorization, UserEntity} from './user-entity';

export interface Course {
  id: number;
  name: string;
  description: string;
  isTopRated: boolean;
  date: string;
  authors: Author[];
  length: number;
}

export interface Author {
  id: number;
  name: string;
  lastName: string;
}

export interface CourseState {
  courses: Course[];
  authors: Author[];
  loading: boolean;
  error: Error;
  authorization: Authorization;
  user: UserEntity;
}

export interface Tag {
  display: string;
  value: number;
}
