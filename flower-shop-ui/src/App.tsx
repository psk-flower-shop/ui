import React from "react";
import { useUser } from "context";

const AuthenticatedApp = React.lazy(
  () => import("routes/authenticated/AuthenticatedRoutes")
);

const UnauthenticatedApp = React.lazy(
  () => import("routes/unauthenticated/UnauthenticatedRoutes")
);

function App() {
  const user = useUser();
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
