import React from 'react';
import Home from './components/Homepage';
import Signup from "./components/SignUp";
import signin from "./components/SignIn";
import PasswordForgetPage from "./components/PasswordForget";
import HomePage from "./components/Home";
import withAuthentication from "./components/withAuthentication";
import { BrowserRouter, Route } from "react-router-dom";
import Create from './components/Create';
import Display from './components/Display';
import Show from './components/Show';
import Edit from './components/Edit';
import Mypost from './components/Mypost';
import About from './components/About';
import Single from './components/Single';



const App = () => (
  <BrowserRouter>
    
      <Route path="/" activeClassName="active" component={Home} exact />
      <Route path="/signin" activeClassName="active" component={signin} exact />
      <Route path="/Signup" component={Signup} />
      <Route path="/PasswordForgetPage" component={PasswordForgetPage} />
      <Route path="/Homepage" component={HomePage} />
      <Route path="/Create" component={Create}/>
      <Route path="/Display" component={Display}/>
      <Route path='/Show/:id' component={Show} />
      <Route path='/Edit/:id' component={Edit} />
      <Route path='/Mypost' component={Mypost} />
      <Route path='/About' component={About} />
      <Route path='/Single' component={Single} />

      


     </BrowserRouter>
);
export default withAuthentication(App);

