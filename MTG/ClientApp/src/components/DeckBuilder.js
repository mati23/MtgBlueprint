import React, { Component } from 'react';
import '../css/bulma.css'
import '../css/home.css'
import '../css/deckbuilder.css'
import { Search } from './Search';
import { Redirect } from 'react-router-dom';

export class DeckBuilder extends Component {
    render() {
        return (
            <div>
                <Search />
                <div className="deck-builder-container">
                    <div className="card-list-container tile is-ancestor">
                        <div className="tile is-vertical is-4">
                            <div className="list is-hoverable">
                                <a className="list-item">
                                    Featured
      </a>
                                <a className="list-item">
                                    All Posts
      </a>
                                <a className="list-item is-active">
                                    Announcements
      </a>
                                <a className="list-item">
                                    Business
      </a>
                                <a className="list-item">
                                    Community
      </a>
                                <a className="list-item">
                                    Data
      </a>
                                <a className="list-item">
                                    Editor Tools
      </a>
                                <a className="list-item">
                                    Education
      </a>
                                <a className="list-item">
                                    Engineering
      </a>
                                <a className="list-item">
                                    Events
      </a>
                                <a className="list-item">
                                    Policy
      </a>
                            </div>                            
                        </div>
                        <div></div>
                        
                        
                    </div>
                </div>

            </div>
        );
    }
}
