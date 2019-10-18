import {UserEntity} from './../interfaces/user-entity.ts';

export class User implements  UserEntity {
  firstName: string;
  id: number;
  lastName: string;
}
