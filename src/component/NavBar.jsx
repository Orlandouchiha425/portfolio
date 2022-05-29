import Image from "../Images/Welcome.png"
export default function NavBar(){
    return(
        <header>
        <nav className=" navButton justify-content-center">
            <main className="hoverButton">
            <img  className="justify-content-start" src={Image} alt="Welcome Picture" height="8%" width="8%"/>

          <button><a href="#home" className=" textcolor btn btn-lg "> Home</a> </button>  
          <button>  <a href="#about" className=" textcolor btn btn-lg "> About </a> </button> 
          <button> <a href="#portfolio"className=" textcolor btn btn-lg "> Portfolio </a> </button>  
          <button> <a href="#contact" className=" textcolor btn btn-lg "> Contact </a> </button> 
            </main>
        </nav>
        </header>
      
    )
}