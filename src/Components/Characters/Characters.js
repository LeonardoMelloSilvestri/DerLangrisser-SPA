import React from 'react';
import './Characters.css';
import { connect } from 'react-redux';

const Characters = ({ characters }) => {
  window.$(document).ready(function () {
    window.$('.materialboxed').materialbox();
  });

  const characterList = characters.map(character => {
    return (
      <div key={character.id}>
        <div className="row">
          <div className="col s12 l4 center">
            <img className="materialboxed" src={require('../../img/' + character.name + '.png')} alt="" />
          </div>
          <div className="col s12 l8">
            <p className="character-name">{character.name}</p>
            <p className="character-info">{character.lore}</p>
            <p className="character-path"><strong>Playable on:</strong> {character.playableOn}</p>
          </div>
        </div>
        <hr className="styled-hr" />
      </div>
    )
  })
  return (
    <div className="custom-container">
      <header className="main-header">
        <div className="center">
          <h3 className="orange-text">Playable Characteres</h3>
        </div>
      </header>
      <section>
        <div className="characters">
          {characterList}
        </div>
      </section>
    </div>
  )
}

const mapStateToStore = (state) => {
  return {
    characters: state.character.characters
  }
}

export default connect(mapStateToStore)(Characters);