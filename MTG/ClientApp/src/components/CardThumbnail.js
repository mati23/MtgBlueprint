import React, { Component } from 'react';
import axios from 'axios';

import '../css/bulma.css'
import '../css/home.css'
import '../css/search.css'

export class CardThumbnail extends Component {
	constructor(props) {
		super(props);
		this.state = {quantity:0}
	}
	incrementQuantity = () => {
		if (this.state.quantity <= 3) {
			let newQuantity = this.state.quantity + 1;
			this.setState({ quantity: newQuantity })
		}
	}
	decrementQuantity = () => {
		if (this.state.quantity >= 1) {
			let newQuantity = this.state.quantity - 1;
			this.setState({ quantity: newQuantity })
		}
	}
	render() {
		return (
			<div className="card-thumbnail">
				<div className="card-image"><img src={this.props.props.image_uris.normal} /></div>
				<div className="quantity buttons">
					<button className="button is-small is-danger" onClick={this.decrementQuantity} >Rem.</button>
					<div><button className="button is-success is-info">Add:{this.state.quantity}</button></div>
					<button className="button is-small is-info" onClick={this.incrementQuantity} >Add.</button>
				</div>
			</div>
			);
	}
}