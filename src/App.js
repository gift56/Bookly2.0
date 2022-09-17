import React from "react";
import { AuthContextProvider } from "./contexts/authContext";
import Pages from "./Routes/Pages";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Pages />
      </AuthContextProvider>
    </>
  );
};

export default App;
