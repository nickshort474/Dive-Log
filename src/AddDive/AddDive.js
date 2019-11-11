import React from 'react';

export default class AddDive extends React.Component{
	
	constructor(){
		super();
		this.state = {
			"date":""
		}

	}

	render(){
		return(
			<div className="container">
				<div className="box">
					<h3>Add Dive</h3>
					<form>	
						<input type="text" placeholder="" value={this.state.date} />

					</form>
				</div>
			</div>
		)
	}
}