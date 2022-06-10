import Image from "../Images/Orlando.png"
export default function NavBar(){
    return(
        <header >
        <nav>
        {/* <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i className="fas fa-bars"></i> */}
            <input type="checkbox" id="check"/>
            <label for="check" className="checkbtn">
                <i className="fas fa-bars"  id="btn"></i>
                <i className="fas fa-times" id="cancel"></i>
            </label>
           
            <img src={Image} alt="Welcome" />
            <main className="hoverButton">


<ul>

    <li><a href="#home" className=" textcolornav cardFont ">Home </a> </li>
    <li><a href="#about" className=" cardFont  ">About </a> </li>
    <li><a href="#portfolio" className=" cardFont ">Portfolio </a> </li>
    <li><a href="#contact" className=" cardFont  ">Contact </a> </li>
    <li><i className="bi bi-layout-text-sidebar"></i>
</li>
</ul>
          {/* <button><a href="#home" className=" textcolor buttonSize btn btn-lg "> <h5>Home</h5></a> </button>  
          <button>  <a href="#about" className=" textcolor  buttonSize btn btn-lg "> <h5 >About</h5> </a> </button> 
          <button> <a href="#portfolio"className=" textcolor  buttonSize btn btn-lg "> <h5>Portfolio</h5> </a> </button>  
          <button> <a href="#contact" className=" textcolor buttonSize btn btn-lg "><h5 >Contact</h5>  </a> </button>  */}
            </main>
        </nav>
        </header>
      
    )
}