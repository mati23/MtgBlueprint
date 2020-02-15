import React, { Component } from 'react';
import axios from 'axios';

import '../css/bulma.css'
import '../css/home.css'
import '../css/search.css'
import { CardThumbnail } from './CardThumbnail';

const WAIT_INTERVAL = 500;


export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            list: [],
            cards: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount() {
        this.timer = null;
    }
    placeholder = "";
    list = []
    options = []


    

    handleChange = (event) => {
        clearTimeout(this.timer);
        this.setState({ value: event.target.value });

        const response = axios.get("https://api.scryfall.com/cards/search?q=".concat(this.state.value)).then(result => {
            let namesArray = [];
            result.data.data.map((element) => namesArray.push(element));
            this.setState({ list: namesArray });
        }).catch(error => console.log(error));

        this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);

    }
    searchCard = () => {
        const response = axios.get("https://api.scryfall.com/cards/search?q=".concat(this.state.value)).then(result => {
            let cardsArray = [];            
            result.data.data.map((element) => {
                element.quantity = 1;
                cardsArray.push(element)
            });
            this.setState({ cards: cardsArray });            
        }).catch(error => console.log(error));
    }
    addCardToPool = (element) => {
        if (element.quantity <= 3) {
            element.quantity += 1;
        }
        
    }
    removeCardFromPool=(element) => {
        if (element.quantity >= 1) {
            element.quantity -= 1;
        }
    }

    render() {
        return (
            <div>
                <div className="field has-addons">
                    <div className="control">
                        <input onChange={this.handleChange} value={this.state.value} className="input" type="text" placeholder="Find a repository" list="browsers" />
                        <datalist id="browsers">
                            <div>
                                {
                                    this.state.list.map((element, key) => <option key={key} value={element.name}>{element.name}</option>)
                                }
                            </div>
                        </datalist>
                    </div>
                    <div className="control-button">
                        <a className="button is-primary" onClick={this.searchCard}>
                            Search
                        </a>
                    </div>
                </div>
                <div className="card-thumbnail-container">                    
                    {this.state.cards.length > 0 ?
                        this.state.cards.map((element, key) =>
                            <div key={key}><CardThumbnail props={element} /></div>
                        )
                        :<div></div>}
                </div>
            </div>
        );
    }
}
