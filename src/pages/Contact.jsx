import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

export default function Contact(){
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  


    return(
       
<div>
<a href="mailto:valadez425@gmail.com"><button type="button" className="btn btn-primary btn-lg btn-block" >Contact Me</button>
</a>  
{/* <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Email Me</h2>
        <button className="project" onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form  className="project" action="https://formsubmit.co/valadez425@gmail.com" method="POST">
<label>Name 
    <input type="string" name="name" />
    </label> 
    <br/>
    <label>Email 
        <input type="email" name="email" required="true" />
        </label>   
    <br/>
    <label>
        <textarea placeholder='Send a Message'></textarea>
        </label>  
    <button type='submit' >Submit</button>    
        </form> */}
     
</div>
      
       
    )
}