import React from 'react';
import {Link} from 'react-router-dom';


export default class Navigation extends React.Component{
	

	render(){
		return(
			
			<div className="container">
				<div className="row">
					<div className="col-3 text-center noPadding">
						<Link className="navIcons" to="/Home"><span class="fas fa-home"></span><span className="d-none d-sm-block">Home</span></Link>
					</div>
					<div className="col-3 text-center noPadding">
						<Link className="navIcons" to="/Log"><span class="fas fa-clipboard-list"></span><span className="d-none d-sm-block">Dive Log</span></Link>
					</div>
					<div className="col-3 text-center noPadding">
						<Link className="navIcons" to="/AddDive"><span className="fas fa-plus"></span><span className="d-none d-sm-block">Add Dive</span></Link>
					</div>
					<div className="col-3 text-center noPadding">
						<Link className="navIcons" to="/Authenticate"><span className="fas fa-id-badge"></span><span className="d-none d-sm-block">Sign in</span></Link>
					</div>
				</div>
			</div>
		)
	}
}