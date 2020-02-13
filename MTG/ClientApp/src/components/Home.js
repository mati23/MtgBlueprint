import React, { Component } from 'react';
import '../css/bulma.css'
import '../css/home.css'
import LogoImg from '../css/Capturar.PNG';
import W from '../css/W.png';
import G from '../css/G.png';
import B from '../css/B.png';
import U from '../css/U.png';
import R from '../css/R.png';
import N from '../css/N.png';
export class Home extends Component {
  static displayName = Home.name;


  render () {
      return (
          <div>
              <div className="hero is-primary">
                  <div className="hero-body">
                      <div class="container">
                          <h1 class="title">
                              My Decks
                      </h1>
                          <h2 class="subtitle">
                              Build new, edit or remove decks from your own library.
                       </h2>
                      </div>
                  </div>              
                  </div>
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
