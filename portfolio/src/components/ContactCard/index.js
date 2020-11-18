
import React from "react";
// import "./style.css";


function ContactCard(props) {
    return (  
        
       <div className="container position-absolute mt-5 ml-3">
           <div className ="row">
               <div className="card bg-secondary shadow-lg">
                   <h2 className="card-header bg-dark text-light">Welcome to my Page!</h2>
                   <br></br>
                   <div className="card-body bg-secondary">
                    <div className="row">
                        <div className="col-md-4">
                            <img className="img img-thumbnail" src="https://tse4.mm.bing.net/th?id=OIP.jIhhwBe4CHCMpS1eiZYILAHaHa&pid=Api&P=0&w=300&h=300" alt="Ryan's Face"></img>
                        </div>
                        <div className="col-md-8 text-light">
                            <p>My name is Ryan Nemec and I am a Bay Area native currently living in Oakland, CA. After previously having a career in enterprise software sales I am embarcing on the journey into programming and I am excited about what I will learn.</p>
                            <br></br>
                            <a className="font-weight-bold text-light" href="https://github.com/perfectoment">Link to Github</a>
                            <br></br>
                            <a className="font-weight-bold text-light" href="https://www.linkedin.com/in/ryan-nemec-5a6b3a66/">Link to Linkedin</a>
                            <br></br>
                            <a className="font-weight-bold text-light" href="resume">Link to Resume</a>
                        </div>
                    </div>
                   </div>
               </div>  
           </div>
       </div>
    )}
   
    export default ContactCard;

