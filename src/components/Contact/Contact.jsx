import React from 'react'
import "./Contact.css"
import Party from "../../assets/Party.jpeg";

const Contact = () => {
  return (
    <>
      <div class="image-container">
    <img src={Party}/>
    <div class="container relative left-40 gap-20">
      <div class="box">
      <h2>FIND US</h2>
      <br/>
      <p>121 Rock Sreet,</p><p>21 Avenue,</p> <p>New York, NY 92103-9000</p> 
    </div>
    <div class="box">
      <h2>HOURS</h2>
      <br/>
      <p>Monday – Saturday
        9am – 7pm
        Sunday
        10am – 6pm</p>
    </div>
    <div class="box">
      <h2>CALL US</h2>
      <br/>
      <p>34****</p>
      <p>87****</p>
    </div>
    </div>
    
        
  </div>
  



  
    </>
  )
}

export default Contact