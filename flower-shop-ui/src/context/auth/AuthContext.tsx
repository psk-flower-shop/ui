import React from "react";
import { authContextDefaults, AuthContextInterface } from "./authTypes";

type Props = {
  children: React.ReactNode;
};

const AuthContext =
  React.createContext<AuthContextInterface>(authContextDefaults);

const AuthProvider = ({ children }: Props) => {
  //TODO: code for pre-loading the user's info if we have their token in local storage
  // const [data, setData] = React.useState<AuthData>({});
  const data = {};

  //TODO: if needed local storage goes here

  // 🚨 this is an important bit.
  // Normally the provider components render the context provider with a value.
  // But we post-pone rendering any of the children until after we've determined
  // whether or not we have a user token and if we do, then we render a spinner
  // while we go retrieve that user's information.
  if (!data) {
    return <div>waiting...</div>;
  }

  const login = () => {}; // make a login request
  const register = () => {}; // register the user
  const logout = () => {}; // logout the user

  return (
    <AuthContext.Provider value={{ data, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
