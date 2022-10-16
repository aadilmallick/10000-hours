import React from "react";
export const AuthContext = React.createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [user, setUser] = React.useState(null);

  const login = ({ email, name, picture }) => {
    const user = {
      email: email.substring(0, email.indexOf("@")),
      name,
      picture,
    };
    setUser(user);
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
