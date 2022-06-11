
import Image from '../Images/Orlando2.png'


export default function About(){
    return(
        <>
        <article>
        {/* <div classNameName=" textColor text-white media" id='about'>
            <img  classNameNameName="align-self-start mr-3" id='about' src={Image} alt="Profile Picture" height="10%" width="10%"/>
           
            <div classNameName='media-body'>
            <h3 classNameName="mt-0 textcolorh3">About Me:</h3>
             <p>Hello my name is Orlando Valadez</p>
             <p>I am a Software Engineer with experience in </p>
            <p> HTML, CSS, Javascript, MONGO, </p>
            <p>Express, REACT and Nodejs </p>
             
         </div>       
        </div> */}
        <div className="media aboutme">
  <img src={Image} className="align-self-center mr-3" alt="Orlando"   height="30%" width="30%"/>
  <div className="media-body">
    <h3 className="mt-0 textcolorh3">About Me</h3>
    <p>Hello, My name is Orlando Valadez, I am a Software Engineer with experience in HTML, CSS, Javascript, REACT, MongoDB, GitHub and much more. I am passionate about programming and learning new things everyday, I'm open to new ideas and processes.</p>
    <p className="mb-0">Technology only keeps on advancing and I tend to advance with the techonology, there is always room for improvement and therefore i love to keep on learning. I been in the IT field for 6 years and have provided excellent customer service and satisfaction through every single interaction </p>
    <a href='https://drive.google.com/file/d/1U8lfrbcxoDTieV61Wlse-W8qR2d_9Bnj/view?usp=sharing' target="_blank"><button>Resume </button></a>

  </div>
</div>
      
        </article>
        </>
       
        
    )
}