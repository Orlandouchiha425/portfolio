import NavBar from './component/NavBar';
import AnimationSquare from "./component/AnimationSquare"
import Portfolio from './pages/Portfolio';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import HomePage from './pages/HomePage';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage />}/>

      </Routes>

    </div>
  );
}

export default App;
