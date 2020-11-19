import { Component } from 'react';
import { HashRouter, Router, Route } from "react-router-dom";
import Portfolio from './components/pages/Portfolio';
import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"


class App extends Component{



render() {
  return (
    <HashRouter basename="/">
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </div>
  </HashRouter>
  );
}
}

export default App;
