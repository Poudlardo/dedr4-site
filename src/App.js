
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Games from './pages/Games';
import Blog from './pages/Blog';
import About from './pages/About';
import Connect from './pages/Connect';


function App() {
  return (
    <>
    <Router>

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
