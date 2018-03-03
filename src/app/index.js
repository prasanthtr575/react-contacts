import './scss/style.scss';

import {render} from "react-dom";
import React from "react";
import {Provider} from "react-redux";

class App extends React.Component {
  render () {
    return(
      <div>
        <h1>Contacts</h1>
        <p>Basic boiler plate is ready</p>
      </div>
    )
  }
}

render(<App />, window.document.getElementById('reactCalApp'));
