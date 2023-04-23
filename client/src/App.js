import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <>
    <Router>
    <Header />
        <div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />

          </Switch>
        </div>
        <Footer />
      </Router>
        
      </>
    );
  }
}

export default App;