import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header(props) {
 return (  
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand roboto p-2" href="/">Ryan Nemec</a>
        <button class="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/">Home </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
 );
}

 export default Header;