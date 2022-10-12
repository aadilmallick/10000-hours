import React from "react";
export const AuthContext = React.createContext({});

export const AuthContextProvider = (props) => {
  const [user, setUser] = React.useState(null);

  const login = ({ email, name, picture }) => {
    setUser({ email: email.substring(0, email.indexOf("@")), name, picture });
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
