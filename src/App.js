import NavBar from './component/NavBar';
import AnimationSquare from "./component/AnimationSquare"
import Portfolio from './pages/Portfolio';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <AnimationSquare />
      <Home />
      <About />
    <Portfolio />
    <Contact />
    </div>
  );
}

export default App;
