import { Component } from 'react';
import Wrapper from "./components/Wrapper"
import Header from "./components/Header"
import AboutCard from './components/AboutCard';
import ContactForm from "./components/ContactForm"
import Footer from './components/Footer';



class App extends Component{



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

export default App;
