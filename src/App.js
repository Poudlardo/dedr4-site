
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Home from './pages/Home';
import Games from './pages/Games';
import Blog from './pages/Blog';
import About from './pages/About';
import Connect from './pages/Connect';
=======
import Home from './components/pages/Home';
import Games from './components/pages/Games';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import Connect from './components/pages/Connect';
import Navbar from './components/Navbar';
>>>>>>> 91fb5569ad1aa717ee4c7da49fed6725ff871add

function App() {
  return (
    <>
    <Router>
<<<<<<< HEAD

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/games' element={<Games />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/connect' element={<Connect />}/>
      </Routes>

=======
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/games' element={<Games />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/connect' element={<Connect />}/>
        </Routes>
>>>>>>> 91fb5569ad1aa717ee4c7da49fed6725ff871add
    </Router>

    </>
  );
}

export default App;
