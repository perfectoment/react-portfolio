import { Component } from 'react';
import Wrapper from "../../Wrapper";
import Header from "../../Header";
import AboutCard from "../../AboutCard";
import Footer from "../../Footer";


class Home extends Component{



render() {
  return (
    <Wrapper>
      <Header/>
      <AboutCard/>
      <Footer/>
    </Wrapper>
  );
}
}

export default Home;