
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Games from './components/pages/Games';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import Connect from './components/pages/Connect';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/games' element={<Games />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/connect' element={<Connect />}/>
        </Routes>
    </Router>

    </>
  );
}

export default App;
