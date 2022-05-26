import React from "react";
import { useAuth } from "context/auth/AuthContext";
import { User } from "./userTypes";

type Props = {
  children: React.ReactNode;
};

const UserContext = React.createContext<User | undefined>(undefined);

const UserProvider = ({ children }: Props) => (
  <UserContext.Provider value={useAuth().data.user}>
    {children}
  </UserContext.Provider>
);

const useUser = () => React.useContext(UserContext);

export { UserProvider, useUser };
