import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import ItemList from './ItemList.js';
import styles from './App.scss';

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
          <h2 className={ styles.title }>Items</h2>
          <ItemList />
        </div>

        <div className={ styles.center }>

          <h2 className={ styles.title }>Details</h2>
          { this.props.center }

          <div className={ styles.test }>
            {/* test content */}

            <hr className={ styles.separator } />
            Test request:

            <button onClick={ this.getAll }> GET ALL </button>
          </div>

        </div>

      </div>
    );
  }
}
