import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";

class App extends Component {
  render() {
    return (
  		<div className="App">
		    <Switch>
	  			<Route exact={true} path="/" component={ContactList}/>
	           	<Route exact path="/detail/:id" component={ContactDetail}/>
	        </Switch>
      	</div>
    );
  }
}



export default App;
