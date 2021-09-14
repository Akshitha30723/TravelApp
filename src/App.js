import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Side from "./components/sidebar";
import Favourites from "./components/Favourites";
import Profile from "./components/Profile";
import Notifications from "./components/Notifications";
import Settings from "./components/Settings";
import HelpMe from "@material-ui/icons/Help";
class App extends Component{
  render(){
    return(
      <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
        </Switch>
      </Router>
      <div className="App">
      <Router>
        <Side/>
        <Switch>
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
        <HelpMe/>
        </Route>
        </Switch>
      </Router>
      </div>
      </div>
    )
  }
}
export default App;
