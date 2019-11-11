import React from 'react';
import SingleDiveLog from '../SingleDiveLog/SingleDiveLog';


export default class Log extends React.Component{
	render(){
		return(
			<div className="container">
				<h1>Log</h1>
				<SingleDiveLog />
			</div>
		)
	}
}