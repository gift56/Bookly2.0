import React from "react";
import AuthContextProvider from "./context/AuthContext";
import Pages from "./Routes/Pages";
import './sass/index.scss';

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
