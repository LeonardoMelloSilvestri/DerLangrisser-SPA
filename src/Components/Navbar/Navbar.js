import React, { Component } from 'react';
import M from 'materialize-css';
import './Navbar.css';

class Navbar extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper indigo">
            <a href="#" className="brand-logo">Langrisser</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#">Characters</a></li>
              <li><a href="#">Itens</a></li>
              <li><a href="#">Scenarios</a></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav indigo lighten-2" id="mobile-demo">
          <li><a href="#">Characters</a></li>
          <li><a href="#">Itens</a></li>
          <li><a href="#">Scenarios</a></li>
        </ul>
      </div>
    )
  }
}

export default Navbar;