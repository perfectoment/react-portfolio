import { Component } from 'react';
import Wrapper from "../../Wrapper";
import Header from "../../Header";
import ContactForm from "../../ContactForm";
import Footer from "../../Footer";


class Contact extends Component{



render() {
  return (
    <Wrapper>
      <Header/>
      <ContactForm/>
      <Footer/>
    </Wrapper>
  );
}
}

export default Contact;