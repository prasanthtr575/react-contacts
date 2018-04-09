import React, { Component } from 'react';
import {connect} from "react-redux";

import './App.css';

import ContactList from "./components/ContactList";

class App extends Component {
  render() {
    return (
  		<div className="App">
        	<ContactList contacts={this.props.data.contacts}></ContactList>
      	</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    	data: state.contacts
  	};
};

export default connect(mapStateToProps)(App);
