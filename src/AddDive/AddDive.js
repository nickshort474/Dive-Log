import React from 'react';

import {firebase} from '@firebase/app';
import 'firebase/firestore';

export default class AddDive extends React.Component{
	
	constructor(){
		super();
		this.state = {
			"date":""
		}

		this.firestore = firebase.firestore();
		
	}

	_handleData(){
		
	}

	_addDive(){
		this.firestore.collection("dives").add({
			'diveDate':"Today",
			'diveLocation':'Great Barrier reef',
			'diveTime':"60"
		});
	}

	render(){
		return(
			<div className="container">
				<div className="box">
					<h3>Add Dive</h3>
					<form>	
						<input type="text" placeholder="" value={this.state.date} onChange={this._handleData.bind(this)}/>
						<button onClick={this._addDive.bind(this)}>Add Dive</button>
					</form>
				</div>
			</div>
		)
	}
}