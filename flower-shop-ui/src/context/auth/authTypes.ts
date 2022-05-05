import { User } from "context/user/userTypes";

export interface AuthContextInterface {
  data: AuthData;
  login: () => void;
  logout: () => void;
  register: () => void;
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
