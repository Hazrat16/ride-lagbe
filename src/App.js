import './App.css';
import React, { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import Contacts from './components/Contacts/Contacts';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RideDetail from './components/RideDetail/RideDetail';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <h4>Email: {loggedInUser.email}</h4> */}
    <Router>
      <Header/>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/destination">
          <Destination/>
        </PrivateRoute>
        <PrivateRoute path="/destination">
          <Destination/>
        </PrivateRoute>
        <PrivateRoute path="/ride/:title">
          <RideDetail/>
        </PrivateRoute>
        <PrivateRoute path="/blog">
          <Blog/>
        </PrivateRoute>
        <PrivateRoute path="/contacts">
          <Contacts/>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
