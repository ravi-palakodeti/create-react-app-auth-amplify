import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { Home } from './Home';
import { Metrics } from './Metrics';
import { About } from './About';
import './Navigation.css';

export const NavigationBar = () => (
 <React.Fragment>
  <Router>
   <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand href="/">Octank Airlines</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav">
     <Nav className="ml-auto">
      <Nav.Item><Link to="/">Home</Link></Nav.Item>
      <Nav.Item><Link to="/metrics">Metrics Dashboard</Link></Nav.Item>
      <Nav.Item><Link to="/about">About</Link></Nav.Item>
     </Nav>
     <br></br>
    </Navbar.Collapse>
   </Navbar>
   <Switch>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/metrics" component={Metrics}></Route>
    <Route exact path="/about" component={About}></Route>
   </Switch>
  </Router>
 </React.Fragment>
);
