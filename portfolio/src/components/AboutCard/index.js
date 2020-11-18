
import React from "react";
import "./style.css";


function AboutCard(props) {
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
                        <div className="col-md-8 text-light font-weight-bold roboto">
                            <p>My name is Ryan Nemec and I am a Full Stack Developer living in the San Francisco
                                 Bay Area. Thank you for visiting my page</p>
                            <br></br>
                            <p class="text-light">  
                                 I am proficent in JavaScript, Node.js, CSS, HTML, mySQL, React.js, Express.js and much more! Please feel free to contact me.
                            </p>
                            <br></br>
                            <br></br>
                            <a className="font-weight-bold roboto link text-center" href="https://github.com/perfectoment">My Github!</a>
                            <br></br>
                            <br></br>
                            <a className="font-weight-bold roboto link text-center" href="https://www.linkedin.com/in/ryan-nemec-5a6b3a66/">My Linkedin!</a>
                            <br></br>
                            <br></br>
                            <a className="font-weight-bold roboto link text-center" href="resume">My Resume!</a>
                        </div>
                    </div>
                   </div>
               </div>  
           </div>
       </div>
    )}
   
    export default AboutCard;

