import React from "react";
import AuthContextProvider from "./context/AuthContext";
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
