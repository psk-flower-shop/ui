import { User } from "context/user/userTypes";
import React, { useEffect } from "react";
import { getUserById, requestLogin } from "services/api/loginService";
import { requestRegister } from "services/api/registerService";
import {
  authContextDefaults,
  AuthContextInterface,
  AuthData,
} from "./authTypes";

type Props = {
  children: React.ReactNode;
};

const AuthContext =
  React.createContext<AuthContextInterface>(authContextDefaults);

const AuthProvider = ({ children }: Props) => {
  const [data, setData] = React.useState<AuthData>({});
  const [loading, setLoading] = React.useState<boolean>(false);

  const tryToGetUser = async () => {
    const token = window.localStorage.getItem("flowerUiAuthToken");
    if (token) {
      setLoading(true);
      const userResponse = await getUserById(token);
      const newData = {
        user: userResponse,
      };
      setData(newData);
      setLoading(false);
    }
  };

  useEffect(() => {
    tryToGetUser();
  }, []);

  // 🚨 this is an important bit.
  // Normally the provider components render the context provider with a value.
  // But we post-pone rendering any of the children until after we've determined
  // whether or not we have a user token and if we do, then we render a spinner
  // while we go retrieve that user's information.
  if (loading) {
    return <div>waiting...</div>;
  }

  const login = (user: User) => {
    requestLogin(user)
      .then((token) => {
        window.localStorage.setItem("flowerUiAuthToken", token);
        tryToGetUser();
      })
      .catch((e) => {
        alert("failed to login");
      });
  }; // make a login request
  const register = async (user: User) => {
    try {
      await requestRegister(user);
    } catch (e) {
      alert("failed to register");
    }
  }; // register the user
  const logout = () => {
    window.localStorage.removeItem("flowerUiAuthToken");
  }; // logout the user

  return (
    <AuthContext.Provider value={{ data, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
