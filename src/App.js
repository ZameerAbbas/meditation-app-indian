import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./Routepages/About/About";
import  {Videos}  from "./Routepages/Videos/Videos";
import Shop from "./Routepages/Shop/Shop";
import { Blog } from "./Routepages/Blogs/Blog";
import Events from "./Routepages/Events/Events";
import Donation from "./Routepages/Donation/Donation";
import Contact from "./Routepages/Contact/Contact";
import Profile from "./Routepages/Profile/Profile"
import History from "./Routepages/History/History"
import SingleProduct from "./Routepages/SingleProduct/SingleProduct"
import Login from "./Routepages/Login/Login";
import Signup from "./Routepages/Signup/Signup";
import SingleBlog from "./Routepages/SingleBlog/SingleBlog";
import SingleEvent from "./Routepages/SingleEvent.js/SingleEvent";

import SingleDonation from "./Routepages/SingleDonation/SingleDonation"
import DeliveryDetails from "./Routepages/DeliveryDetails/DeliveryDetails";


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Videos" component={Videos}></Route>
      <Route path="/Shop" component={Shop}/>
      <Route path="/Blog"><Blog/></Route>
      <Route path="/Events"><Events/></Route>
      <Route path="/Donation"><Donation/></Route>
      <Route path="/Contact"><Contact/></Route>
      <Route path="/SingleProduct"><SingleProduct /></Route>
      <Route path="/Login"><Login/></Route>
      <Route path="/Signup"><Signup/></Route>
      <Route path="/SingleBlog"><SingleBlog/></Route>
      <Route path="/SingleEvent"><SingleEvent/></Route>
      <Route path="/SingleDonation"><SingleDonation/></Route>
      <Route path="/DeliveryDetails"><DeliveryDetails/></Route>

      <Route path="/Profile"><Profile /></Route>
      <Route path="/History"><History /></Route>
      
      </Switch>
    </Router>
  );
}

export default App;
