import React, { Component } from 'react';
import '../css/bulma.css'
import '../css/home.css'
import '../css/search.css'

export class Search extends Component {



    render() {
        return (
            <div>
                <div class="field has-addons">
                    <div class="control">
                        <input class="input" type="text" placeholder="Find a repository" list="browsers"/>
                        <datalist id="browsers">
                            <option value="Internet Explorer" />
                            <option value="Firefox" />
                            <option value="Chrome" />
                            <option value="Opera" />
                            <option value="Safari" />
                        </datalist>
                    </div>
                    <div class="control-button">
                        <a class="button is-info">
                            Search
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
