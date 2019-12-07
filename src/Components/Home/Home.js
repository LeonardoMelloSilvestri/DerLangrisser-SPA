import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';
import './Home.css';
import '../../helpers'
import { backToTop } from '../../helpers';

class Home extends Component {
  componentDidMount() {
    window.$('.carousel.carousel-slider').carousel({
      fullWidth: true
    });

    setInterval(function () {
      window.$('.carousel').carousel('next');
    }, 6000);

    window.$('.materialboxed').materialbox();
  }

  render() {
    return (
      <div>
        <header className="header-home indigo lighten-2">
          <div className="indigo lighten-2">
            <div className="custom-container center">
              <span className="header-home-title">Der Langrisser Tutorials</span>
              <p className="header-home-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="row custom-container">
              <div className="col s12 m6 l4">
                <Link onClick={backToTop} to={'/characters'}>
                  <div className="card hoverable">
                    <div className="card-image">
                      <img src={require('../../img/characters.jpg')} />
                      <span className="card-title">Characters</span>
                      <button href="/characters" className="btn-floating halfway-fab waves-effect waves-light red pulse"><i className="material-icons">play_arrow</i></button>
                    </div>
                    <div className="card-content">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tenetur deleniti maxime repellendus molestiae, aperiam cupiditate ad, soluta nostrum eius in fugiat voluptates explicabo aliquam mollitia saepe eum ex dolores.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col s12 m6 l4">
                <div className="card hoverable">
                  <div className="card-image">
                    <img src={require('../../img/itens.jpg')} />
                    <span className="card-title">Itens</span>
                  </div>
                  <div className="card-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tenetur deleniti maxime repellendus molestiae, aperiam cupiditate ad, soluta nostrum eius in fugiat voluptates explicabo aliquam mollitia saepe eum ex dolores.</p>
                  </div>
                </div>
              </div>
              <div className="col s12 l4">
                <div className="card hoverable">
                  <div className="card-image">
                    <img src={require('../../img/scenarios.jpg')} />
                    <span className="card-title">Scenarios</span>                    
                  </div>
                  <div className="card-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tenetur deleniti maxime repellendus molestiae, aperiam cupiditate ad, soluta nostrum eius in fugiat voluptates explicabo aliquam mollitia saepe eum ex dolores.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Gallery />
      </div>
    )
  }
}

export default Home;