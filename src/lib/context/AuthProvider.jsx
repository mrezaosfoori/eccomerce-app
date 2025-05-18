import React, { createContext } from "react";
import { useGetAccount } from "../queries/queriesAndMutations";
import { Loader } from "lucide-react";

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const { data: user, isPending } = useGetAccount();

  if (isPending) {
    <Loader />;
  }

  return (
    <AuthContext.Provider
      value={{
        user: user,
        isPending: isPending,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
