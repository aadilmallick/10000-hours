import "./styles/App.css";
import { HomeScreen } from "./pages/HomeScreen";
import { CardContextProvider } from "./context/CardContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutScreen } from "./pages/AboutScreen";

function App() {
  return <AuthStack />;
}

function AuthStack() {
  return (
    <>
      <BrowserRouter>
        <CardContextProvider>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
          </Routes>
        </CardContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
