import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import './Navbar.css';

class Navbar extends Component {
  componentDidMount() {
    M.AutoInit();
    
    window.$('.sidenav li').click(() => {
      window.$('.sidenav').sidenav('close');
    })
  }

  render() {
    return (
      <>
        <nav>
          <div className="nav-wrapper indigo">
            <Link to="/" className="brand-logo">Langrisser</Link>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/characters">Characters</Link></li>
              <li><Link to="/items">Items</Link></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav indigo lighten-2" id="mobile-demo">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/characters">Characters</Link></li>
          <li><Link to="/items">Items</Link></li>
        </ul>
      </>
    )
  }
}

export default Navbar;
