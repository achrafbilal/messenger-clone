import React, { useState } from 'react';
import "./bootswatch.min.css";
import "./App.css";
import firebase from 'firebase';
import db from './firebase';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Index from './screens/Index';
import Groups from './screens/Groups';
import Login from './screens/Login';
import Register from './screens/Register';
import Header from './components/Head/Header';
function App() {
  const users = db.collection('users');
  const [user, setUser] = useState({ email: "achraf", password: "achraf" })
  const [auth, setAuth] = useState(false)
  const connect = (u) => {
    users.where('email', '==', u.email).where('password', '==', u.password).get().then
      (
        (querySnapshot) => {
          querySnapshot.forEach
            (
              element => {
                setUser({ ...element.data(), id: element.id });
                setAuth(true);
                console.log(element.data(), user, auth)
              }
            );
        }
      )
      .catch
      (
        (error) =>
          console.log(error)
      )
  }
  const register = async (u) => {
    const res = await users.add({
      email: u.email,
      password: u.password,
      name: u.name,
      phone: u.phone,
      role: 'user'
    });
    console.log(res);
  }
  const logout = () => {
    setAuth(false)
    setUser({ email: "guest", password: "" })
  }

  return (
    <Router>
      <Header auth={auth} logout={logout} />
      <Switch>
        <Route path="/s" exact>
          <h1>wash</h1>

        </Route>
        <Route path="/" exact>
          {
            auth ? <Index user={user} /> : <Login log={connect} />
          }
        </Route>
        <Route path="/login" exact>
          {
            auth ? <Index user={user} /> : <Login log={connect} />
          }

        </Route>
        <Route path="/register" exact>
          {
            auth ? <Index user={user} /> : <Register register={register} />
          }

        </Route>
        <Route path="/groups" exact>
          {
            auth ? <Groups user={user} /> : <Login log={connect} />
          }
        </Route>
        <Route path="/logout" exact>

          <Login log={connect} />

        </Route>

      </Switch>
    </Router>
  );
}

export default App;
