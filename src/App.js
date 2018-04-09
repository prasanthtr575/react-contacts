import React, { Component } from 'react';
import './App.css';

import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import { contacts } from "./mock/store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={contacts}></ContactList>
      </div>
    );
  }
}

export default App;
