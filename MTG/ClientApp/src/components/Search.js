import React, { Component } from 'react';
import axios from 'axios';

import '../css/bulma.css'
import '../css/home.css'
import '../css/search.css'

const WAIT_INTERVAL = 2000;

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', list: [], cards: [] };
        this.handleChange = this.handleChange.bind(this);

    }
    componentWillMount() {
        this.timer = null;
    }
    placeholder = "";
    list = []
    options = []


    renderRow = () => {

        console.log('options', this.state.list);

    }

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
            result.data.data.map((element) => cardsArray.push(element));
            this.setState({ cards: cardsArray });
            console.log(this.state.cards);
        }).catch(error => console.log(error));

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
                    <div className="card-thumbnail">
                        <div className="card-image"><img src="https://img.scryfall.com/cards/normal/front/e/c/ec2120ff-a6d4-4192-96c0-33c139155ddf.jpg?1562942454" /></div>
                        <div className="quantity buttons">
                            <button class="button is-small is-danger">Rem.</button>
                            <div><button class="button is-success is-info">Add : 4</button></div>
                            <button class="button is-small is-info">Add.</button>
                        </div>
                    </div>
                    {this.state.cards.length > 0 ?
                        this.state.cards.map((element, key) =>
                            <div className="card-thumbnail" key={key}>
                                <img src={element.image_uris.normal} />                                
                            </div>
                        )
                        :<div>No Cards</div>}
                </div>
            </div>
        );
    }
}
