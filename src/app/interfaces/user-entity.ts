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
  first: string;
  last: string;
}

export interface Authorization {
  token: string;
}
