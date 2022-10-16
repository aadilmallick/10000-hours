import React from "react";
export const AuthContext = React.createContext({});

// export const addUserToLocalStorage = (user) => {
//   localStorage.setItem("user", JSON.stringify(user));
// };

// export const removeUserFromLocalStorage = () => {
//   localStorage.removeItem("user");
// };

// export const getUserFromLocalStorage = () => {
//   const result = localStorage.getItem("user");
//   const user = result ? JSON.parse(result) : null;
//   return user;
// };

export const AuthContextProvider = (props) => {
  const [user, setUser] = React.useState(null);
  // const prevUser = React.useMemo(() => getUserFromLocalStorage(), []);
  // React.useEffect(() => {
  //   console.log("current user: ", prevUser);
  //   if (prevUser) {
  //     setUser(prevUser);
  //     document.getElementById("buttonDiv").hidden = true;
  //   }
  // }, []);

  const login = ({ email, name, picture }) => {
    const user = {
      email: email.substring(0, email.indexOf("@")),
      name,
      picture,
    };
    setUser(user);
    //addUserToLocalStorage(user);
    document.getElementById("buttonDiv").hidden = true;
  };

  const logout = () => {
    setUser(null);
    //removeUserFromLocalStorage();
    document.getElementById("buttonDiv").hidden = false;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
