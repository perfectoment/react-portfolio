import React from "react";
// import "./style.css";

function Projects(props) {
 return (  
    <div class="card bg-secondary shadow-lg">
        <div class="card-body bg-secondary">
        <img class="img img-thumbnail shadow-lg" src={props.image} alt={props.name}></img>
        <a class ="font-weight-bold text-light" href={props.link}>{props.name}</a>
        <br></br>
        <a class ="text-light" href={props.github}>Link to Github</a>
        </div>   
    </div>

 );   
}

 export default Projects;