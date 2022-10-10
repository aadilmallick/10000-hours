import "./styles/App.css";
import { HomeScreen } from "./pages/HomeScreen";
import { CardContext, CardContextProvider } from "./context/CardContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <CardContextProvider>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </CardContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
