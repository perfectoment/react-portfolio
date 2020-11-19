import { Component } from 'react';
import Wrapper from "../../Wrapper";
import Header from "../../Header";
import Footer from "../../Footer";
import Projects from "../../Projects"
import projects from "../../project.json"



class Portfolio extends Component{


state ={
projects:projects

}  

render() {
  return (
    <Wrapper>
      <Header/>
      {this.state.projects.map(project => (
        <Projects
          id={project.id}
          key={project.id}
          name={project.name}
          github={project.github}
          link={project.link}
          image={project.image}
        />
      ))}
      <Footer/>
    </Wrapper>
  );
}
}

export default Portfolio;