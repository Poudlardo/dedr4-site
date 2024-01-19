import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GamesTwo from "./pages/GamesTwo";
import Blog from "./pages/Blog";
import Consulting from "./pages/Consulting.js";
import Connect from "./pages/Connect";
import Termsofservice from "./pages/Termsofservice";
import Privacypolicy from "./pages/Privacypolicy.js";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GamesTwo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/tos" element={<Termsofservice />} />
          <Route path="/privacy" element={<Privacypolicy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
