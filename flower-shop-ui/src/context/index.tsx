import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "store/store";
import { AuthProvider } from "./auth/AuthContext";
import { UserProvider, useUser } from "./user/UserContext";

type Props = {
  children: React.ReactNode;
};

const AppProviders = ({ children }: Props) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <AuthProvider>
            <UserProvider>{children}</UserProvider>
          </AuthProvider>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

export { useUser };

export default AppProviders;
