import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import '../css/bulma.css';
import '../css/home.css';
import LogoImg from '../css/Capturar.PNG';
import W from '../css/W.png';
import G from '../css/G.png';
import B from '../css/B.png';
import U from '../css/U.png';
import R from '../css/R.png';
import N from '../css/N.png';
import { Link } from 'react-router-dom';
export class Home extends Component {
  static displayName = Home.name;

    handleOnClick = () => {
        window.console.log('clicado')
        return <Redirect to="/deck-builder" />
    }

    render() {               
      return (
          <div>
              <div className="hero is-primary">
                  <div className="hero-body">
                      <div className="container">
                          <h1 className="title">
                              My Decks
                      </h1>
                          <h2 className="subtitle">
                              Build new, edit or remove decks from your own library.
                       </h2>
                      </div>
                  </div>              
              </div>
              <div className="buttons-container"><Link className="button is-primary is-large" to="/deck-builder">New Deck</Link></div>
                  <div className="decks-grid-container container">
                      <div className="decks-container">
                      <div className="deck-thumbnail">
                          <div className="thumbnail-title">Rise of the Eldrazi</div>
                          <img src={LogoImg} />                          
                          </div>
                      <div className="deck-description">
                          <img src={G} />
                          <img src={B} />
                          <img src={N} />
                      </div>
                      </div>
                      <div className="decks-container">
                          dsa
                      </div>
                      <div className="decks-container">
                          dsa
                      </div>
                      <div className="decks-container">
                      
                      </div>
                  </div>
              </div>              
    );
  }
}
