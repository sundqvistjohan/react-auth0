import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";
import Auth from "./auth/Auth";
import Callback from "./Callback";
import Public from "./Public";
import Private from "./Private";
import Courses from "./Courses";
import PrivateRoute from "./PrivateRoute";
import AuthContext from "./AuthContext"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: new Auth(this.props.history)
    }
  }
  render() {
    const { auth } = this.state
    return (
      <AuthContext.Provider value={auth}>
        <Nav auth={auth} />
        <div className="body">
          <Route
            path="/"
            exact
            render={(props) => <Home auth={auth} {...props} />}
          />
          <Route
            path="/callback"
            render={(props) => <Callback auth={auth} {...props} />}
          />
          <PrivateRoute path="/profile" component={Profile} auth={auth} />
          <Route path="/public" component={Public} />
          <PrivateRoute path="/private" component={Private} auth={auth} />
          <PrivateRoute
            path="/courses"
            component={Courses}
            auth={auth}
            scopes={["read:courses"]}
          />
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
