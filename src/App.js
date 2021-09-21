import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Favourites from "./components/Favourites";
import Profile from "./components/Profile";
import Notifications from './components/Notifications';
import Settings from "./components/Settings"; 
import Help from "./components/Help";
import HotelList from "./components/HotelList";
class App extends Component{
  render(){
    return(
      <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path={"/dashboard"}> 
        <Dashboard/>
        </Route>
        <Route exact path={"/fav"}> 
        <Favourites/>
        </Route>
        <Route exact path={"/profile"}> 
        <Profile/>
        </Route>
        <Route exact path={"/notifications"}> 
        <Notifications/>
        </Route>
        <Route exact path={"/settings"}> 
        <Settings/>
        </Route>
        <Route exact path={"/help"}> 
        <Help/>
        </Route>
        <Route exact path={"/hotels"}> 
        <HotelList/>
        </Route>
        </Switch>
      </Router> 
      </div>
    
    )
  }
}
export default App;
