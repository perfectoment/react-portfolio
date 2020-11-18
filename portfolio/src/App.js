import { Component } from 'react';
import Wrapper from "./components/Wrapper"
import Header from "./components/Header"
import ContactCard from './components/ContactCard';
import Footer from './components/Footer';



class App extends Component{



render() {
  return (
    <Wrapper>
      <Header/>
      <ContactCard/>
      <Footer/>
    </Wrapper>
  );
}
}

export default App;
