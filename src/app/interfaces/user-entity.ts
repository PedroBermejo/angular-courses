export interface LoginInfo {
  login: string;
  password: string;
}

export interface UserEntity {
  id: number;
  token: string;
  name: Name;
  login: string;
  password: string;
}

interface Name {
  firstName: string;
  lastName: string;
}

export interface Authorization {
  token: string;
}
