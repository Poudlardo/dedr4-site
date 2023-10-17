import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GamesTwo from "./pages/GamesTwo";
import Blog from "./pages/Blog";
import Consulting from "./pages/Consulting.js";
import About from "./pages/About";
import Connect from "./pages/Connect";
import Termsofservice from "./pages/Termsofservice";
import Privacypolicy from "./pages/Privacypolicy.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<GamesTwo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/Termsofservice" element={<Termsofservice />} />
          <Route path="/Privacypolicy" element={<Privacypolicy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
