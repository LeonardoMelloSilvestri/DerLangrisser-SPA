import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Items.css';

class Items extends Component {
  componentDidMount() {
    window.$('.tabs').tabs({
      swipeable: true,
      responsiveThreshold: 1920,
      duration: 0
    });
  }

  render() {
    console.log(this.props.items)
    const offensiveItemsList = this.props.items.offensiveItems.map(item => {
      return (
        <div id="itemList" key={item.id}>
          <div className="col s12 m4 l3 xl2">
            <div className="card card-item">
              <div className="card-image">
                <img className="center" src={require('../../img/' + item.src + '.png')} />
              </div>
              <div className="card-content black-text center">
                <h5>{item.name}</h5>
                <h6>Attack: <strong>{item.attack}</strong></h6>
                <h6>Magic: <strong>{item.magic}</strong></h6>
                <h6>Defense: <strong>{item.defense}</strong></h6>
                <h6>Price: <strong>{item.price}</strong></h6>
              </div>
            </div>
          </div>
        </div>
      )
    })
    const defensiveItemsList = this.props.items.defensiveItems.map(item => {
      return (
        <div id="itemList" key={item.id}>
          <div className="col s12 m4 l3 xl2">
            <div className="card card-item">
              <div className="card-image">
                <img className="center" src={require('../../img/' + item.src + '.png')} />
              </div>
              <div className="card-content black-text center">
                <h5>{item.name}</h5>
                <h6>Attack: <strong>{item.attack}</strong></h6>
                <h6>Magic: <strong>{item.magic}</strong></h6>
                <h6>Defense: <strong>{item.defense}</strong></h6>
                <h6>Price: <strong>{item.price}</strong></h6>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="custom-container">
        <header className="main-header">
          <div className="center">
            <h3 className="orange-text">Items</h3>
          </div>
        </header>
        <div className="row">
          <div className="col s12">
            <ul id="tabs-swipe-demo" className="tabs">
              <li className="tab col s6"><a className="active" href="#swipe-1">Offensive Items</a></li>
              <li className="tab col s6"><a href="#swipe-2">Defensive Items</a></li>
            </ul>
            <div id="swipe-1" className="col s12">
              {offensiveItemsList}
            </div>
            <div id="swipe-2" className="col s12">
              {defensiveItemsList}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToStore = (state) => {
  return {
    items: state.item
  }
}

export default connect(mapStateToStore)(Items);