import NavBar from '../component/NavBar';
import AnimationSquare from "../component/AnimationSquare"
import Portfolio from '../pages/Portfolio';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';


export default function HomePage(){
    return(
        <>
        <AnimationSquare/>
        <Home />
        <About />
        <Portfolio />
        <Contact />

        </>
    )
}