import './App.css';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Page404 from './pages/Page404';

function App() {
  return (

    <Router>
      <header>
        <nav>
          <ul>
            <li>  <Link to="/" >🏠 Homepage</Link> </li>
            <li>  <Link to="/posts" > ✉️ Posts </Link> </li>
            <li>  <Link to="/profile" >👨🏻Profile </Link> </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/posts' element={<Posts/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/profile/:username' element={<Profile/>}></Route>
        <Route path='*' element={<Page404/>}></Route>

      </Routes>

    </Router>

 
  );
}

export default App;
