import React from "react";
import { AuthContextProvider } from "./contexts/authContext";
import Pages from "./Routes/Pages";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Pages />
      </AuthContextProvider>
    </div>
  );
};

export default App;
