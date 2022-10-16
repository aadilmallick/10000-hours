import { Navbar } from "../components/Navbar";
import { ProgressSection } from "../components/ProgressSection";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { Footer } from "../components/Footer";
import { GoogleLogin } from "@react-oauth/google";
import { googleLogout } from "@react-oauth/google";

const HomeScreen = () => {
  const { user } = useContext(AuthContext);
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
      <Footer />
    </>
  );
};

const LogoutButton = () => {
  const { logout } = useContext(AuthContext);
  return (
    <button
      className="btn btn-dark"
      onClick={() => {
        logout();
        googleLogout();
      }}
    >
      logout
    </button>
  );
};

const LoginButton = () => {
  const { login } = useContext(AuthContext);
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
        const token = jwtDecode(credentialResponse.credential);
        const { email, name, picture } = token;
        login({ email, name, picture });
      }}
      onError={() => {
        console.log("Login Failed");
      }}
      useOneTap
      auto_select
    />
  );
};

const HeaderContent = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="header-content text-center">
        <h1>10000 HOURS</h1>
        <h2>Starts Here</h2>
        {user ? <LogoutButton /> : <LoginButton />}
      </div>
    </>
  );
};
export { HomeScreen };
