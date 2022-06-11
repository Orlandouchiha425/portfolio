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

  


    return(
       
<div>
<a href="mailto:valadez425@gmail.com"><button type="button" className="btn btn-primary btn-lg btn-block" >Contact Me</button>
</a>  

     
</div>
      
       
    )
}