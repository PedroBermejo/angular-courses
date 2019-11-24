import {UserEntity} from './../interfaces/user-entity';

export class User implements  UserEntity {
  firstName: string;
  id: number;
  lastName: string;
  email: string;
  password: string;
}
