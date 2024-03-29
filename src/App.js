import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './context';
import NotFound from './components/pages/NotFound';


import AddContact from './components/contacts/AddContact';
import Test from './components/test/Test';



class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
      <Header branding="ROLODEX" />

      <div className="container">
      <Switch>
        <Route exact path="/" component= {Contacts}/>
        <Route exact path="/contact/add" component= {AddContact}/>
        <Route exact path="/about" component= {About}/>
        <Route exact path="/test" component= {Test}/>
        <Route component ={NotFound}  />
      </Switch>
      </div>
       
      </div>
      </Router>
      </Provider>
    
    );
  }
}

export default App;
