import React from 'react';


import './App.css';


import {HashRouter as Router,Route} from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Footer from './Navigation/Footer';
import Home from './Home/Home';
import Log from './Log/Log';
import AddDive from './AddDive/AddDive';
import Authenticate from './Authenticate/Authenticate';






export default class App extends React.Component {
    render(){
       return (

            <Router>
                <Navigation />
                <Route exact path='/' component={Home} />
                <Route path='/Home' component={Home} />
                <Route path='/Log' component={Log} />
                <Route path='/AddDive' component={AddDive} />
                <Route path='/Authenticate' component={Authenticate} />
                <Footer />
            </Router>
    
        );
    }
   
}


