import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './index.scss';

export default class App extends Component {
  static propTypes = {
    center: PropTypes.element,
  };

  constructor(props) {
    super(props);

    this.getAll = this.getAll.bind(this);
  }

  getAll() {
    const url = "http://localhost:5000/api/v1"
    const myHeaders = new Headers({
      "Content-Type": "application/json",
    })

    const payload = {
        "method": "App.get_all",
        "params": null,
        "jsonrpc": "2.0",
        'id': 0,
    }

    const request = new Request(url, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(payload),
      mode: 'cors',
      cache: 'default'
    })

    fetch(request)
      .then(response => {
        // Convert to JSON
        return response.json();
      }).then(function(j) {
        // `j` is a JavaScript object
        console.log(j);
      });

  }

  render() {

    return (
      <div className={ styles.app }>

        <div className={ styles.sidebar }>
          {/* Sidebar content here */}
        </div>

        <div className={ styles.center }>
          {/* Main content here */}
        </div>

      </div>
    );
  }
}
