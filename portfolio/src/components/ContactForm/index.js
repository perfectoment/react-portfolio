
import React from "react";
// import "./style.css";


function ContactForm(props) {
    return (  
      <div className="container position-absolute mt-5">
        <div className="row">
          <div className="col-lg-8">
              <div className="card m-auto bg-secondary shadow-lg">
                  <h2 className="card-header roboto bg-dark text-light">Contact</h2>
                  <br className="bg-secondary"></br>
                  <div className="card-body bg-secondary">
                      <div className="row">
                          <form className="m-auto w-75">
                              <div className="form-group">
                              <label class="text-light" for="exampleInputEmail1">Name</label>
                                <input type="email" className="form-control bg-dark text-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"></input>
                              </div>
                              <div className="form-group">
                                <label className="text-light" for="exampleInputPassword1">Email</label>
                                <input type="email" class="form-control bg-dark text-light" id="exampleInputEmail1" placeholder="Email"></input>
                              </div>
                              <div className="form-group">
                                  <label className="text-light" for="exampleFormControlTextarea1">Message</label>
                                  <textarea className="form-control bg-dark text-light" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                              </div>
                              <button typr="submit" class="btn btn-primary bg-dark text-light">Submit</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div> 
    )}
   
    export default ContactForm;
