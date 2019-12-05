import React, { Component } from 'react';
import './Home.css';

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
        <header className="indigo lighten-2">
          <div className="indigo lighten-2">
            <div className="container center">
              <span className="header-title">Der Langrisser Tutorials</span>
              <p className="header-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="row container-cards">
              <div className="col s12 m6 l4">
                <div className="card hoverable">
                  <div className="card-image">
                    <img src={require('../../img/characters.jpg')} />
                    <span className="card-title">Characters</span>
                    <a className="btn-floating halfway-fab waves-effect waves-light red pulse"><i className="material-icons">play_arrow</i></a>
                  </div>
                  <div className="card-content">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, dicta veritatis libero eius tempora ut sint inventore, quod cumque, voluptate minus rem quo mollitia! Labore a perferendis nisi ut recusandae.</p>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l4">
                <div className="card hoverable">
                  <div className="card-image">
                    <img src={require('../../img/itens.jpg')} />
                    <span className="card-title">Itens</span>
                    <a className="btn-floating halfway-fab waves-effect waves-light red pulse"><i className="material-icons">play_arrow</i></a>
                  </div>
                  <div className="card-content">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, ipsa dolor ea dolores explicabo repellat illum eaque voluptates reiciendis deserunt distinctio tempore qui inventore esse quasi velit excepturi voluptatibus ratione.</p>
                  </div>
                </div>
              </div>
              <div className="col s12 l4">
                <div className="card hoverable">
                  <div className="card-image">
                    <img src={require('../../img/scenarios.jpg')} />
                    <span className="card-title">Scenarios</span>
                    <a className="btn-floating halfway-fab waves-effect waves-light red pulse"><i className="material-icons">play_arrow</i></a>
                  </div>
                  <div className="card-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tenetur deleniti maxime repellendus molestiae, aperiam cupiditate ad, soluta nostrum eius in fugiat voluptates explicabo aliquam mollitia saepe eum ex dolores.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section>
          <div className="gallery container-cards center">
            <h3 className="">Gallery</h3>
            <div className="row">
              <div className="col s12 m6 l4">
                <img className="materialboxed responsive-img" src={require('../../img/gallery1.jpg')} />
              </div>
              <div className="col s12 m6 l4">
                <img className="materialboxed responsive-img" src={require('../../img/gallery2.jpg')} />
              </div>
              <div className="col s12 m6 l4">
                <img className="materialboxed responsive-img" src={require('../../img/gallery3.jpg')} />
              </div>
              <div className="col s12 m6 l4">
                <img className="materialboxed responsive-img" src={require('../../img/gallery5.jpg')} />
              </div>
              <div className="col s12 m6 l4">
                <img className="materialboxed responsive-img" src={require('../../img/gallery5.jpg')} />
              </div>
              <div className="col s12 m6 l4">
                <img className="materialboxed responsive-img" src={require('../../img/gallery6.jpg')} />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home;