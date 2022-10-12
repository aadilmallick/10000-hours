import { Navbar } from "../components/Navbar";
import { ProgressSection } from "../components/ProgressSection";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";

const HomeScreen = () => {
  const { user, login, logout } = useContext(AuthContext);
  return (
    <>
      <header id="header-home">
        <div className="container">
          <Navbar />
          <HeaderContent />
        </div>
        <div className="spacer red-stacked-layer"></div>
      </header>
      {user && <ProgressSection />}
    </>
  );
};

const HeaderContent = () => {
  const { user, login, logout } = useContext(AuthContext);
  console.log(user);
  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    const { email, name, picture } = jwtDecode(response.credential);
    login({ email, name, picture });
  };
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: handleCredentialResponse,
    });
    if (!user) {
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" } // customization attributes
      );
      google.accounts.id.prompt(); // also display the One Tap dialog
    }
  }, [user]);

  return (
    <>
      <div className="header-content text-center">
        <h1>10000 HOURS</h1>
        <h2>Starts Here</h2>
        {user ? (
          <button className="btn btn-dark" onClick={logout}>
            logout
          </button>
        ) : (
          <div id="buttonDiv"></div>
        )}
      </div>
    </>
  );
};

export { HomeScreen };
