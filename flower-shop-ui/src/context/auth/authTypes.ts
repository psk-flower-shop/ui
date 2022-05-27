import { User } from "context/user/userTypes";

export interface AuthContextInterface {
  data: AuthData;
  login: (user: User) => void;
  logout: () => void;
  register: (user: User) => void;
}

export const authContextDefaults: AuthContextInterface = {
  data: {},
  login: () => null,
  logout: () => null,
  register: () => null,
};

export type AuthData = {
  user?: User;
};
