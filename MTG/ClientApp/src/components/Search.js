import React, { Component } from 'react';
import '../css/bulma.css'
import '../css/home.css'
import '../css/search.css'

const mtg = require('mtgsdk');
export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '', list:[] };        
        this.handleChange = this.handleChange.bind(this);
        
    }
    placeholder = "";
    list = []
    options = []
    

    renderRow = () => {

        console.log('options', this.state.list);

    }
    
    handleChange = (event) => {        
        this.setState({ value: event.target.value });
        console.log(this.state.value);
        mtg.card.where({ name:'"Archangel Avacyn"'}).then(result => {
            if (result && result !== null) {
                this.setState({ list: result });
                console.log(this.state.list);
            } else {
                return
            }
        }).catch((erro) => { console.log(erro) }).finally(this.renderRow);
    }

    render() {
        return (
            <div>
                <div className="field has-addons">
                    <div className="control">
                        <input onChange={this.handleChange} value={this.state.value} className="input" type="text" placeholder="Find a repository" list="browsers" />
                        <datalist id="browsers">
                            {

                                this.state.list.map((element, key) => <option key={key} value={element.name}>{element.name}</option>)
                            
                            }                        
                        </datalist>
                    </div>
                    <div className="control-button">
                        <a className="button is-info">
                            Search
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
