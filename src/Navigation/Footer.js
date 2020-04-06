import React from 'react';

export default class Footer extends React.Component{
	
	constructor(){
		super();
		this.style = {
		    backgroundColor: "blue",
		    borderTop: "1px solid black",
		    textAlign: "center",
		    padding: "10px",
		    position: "fixed",
		    left: "0",
		    bottom: "0",
		    height: "40px",
		    width: "100%",
		}

		this.phantom = {
		  	display: 'block',
		  	padding: '10px',
		  	height: '40px',
		  	width: '100%',
		}
	}

	render(){
		return(
			
			<div>
            	<div style={this.phantom} />
	            <div style={this.style}>
	                footer
	            </div>
        	</div>
				
		)
	}
} 