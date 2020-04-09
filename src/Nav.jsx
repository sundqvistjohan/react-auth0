import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    const { isAuthenticated, logout, login } = this.props.auth;

    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/public">Public</Link>
          </li>
          <li>
            <button onClick={isAuthenticated() ? logout : login}>
              {isAuthenticated() ? "Log out" : "Log in"}
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
