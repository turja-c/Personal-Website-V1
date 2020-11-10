import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/pages/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch> 
        <Route path='/'exact component={Home} />
      </Switch>
      <Footer/>
    </Router>
  </div>
  );
}

export default App;
