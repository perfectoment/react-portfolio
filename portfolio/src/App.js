import { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from './components/pages/Portfolio';
import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"







class App extends Component{



render() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
  );
}
}

export default App;
