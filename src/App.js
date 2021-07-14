import React, { Component } from 'react';
//import Navbar, NavbarBrand
import { Navbar, NavbarBrand}  from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { DESTINATIONS } from './shared/destinations';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            destinations: DESTINATIONS,
        };
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/"> Starry Nights </NavbarBrand>
                </div>
                </Navbar>
                <Directory destinations={this.state.destinations}/>
            </div>
        );
    }
}

export default App;
