import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import CabinetAPI from 'api/index.js';

import styles from './index.scss';

export default class App extends Component {
  static propTypes = {
    center: PropTypes.element,
  };

  constructor(props) {
    super(props);

    this._getAll = this._getAll.bind(this);

    this.state = {
      items: [],
    };
  }

  _getAll() {
    // test data
    const account_id = 'my-name@my-company.com'
    const password = 'asdfasdf'
    const vault_name = 'test-vault'

    CabinetAPI
      .openVault(account_id, password, vault_name)
      .then(() => {
        return CabinetAPI.getAll();
      })
      .then(response => {
        this.setState({ items: Object.keys(response.result) });
      });
  }

  render() {

    const items = [];
    this.state.items.forEach(i => {
      items.push(<li key={ i }>{ i }</li>);
    });

    return (
      <div className={ styles.app }>

        <div className={ styles.sidebar }>
          {/* Sidebar content here */}
          <button onClick={ this._getAll }>Get all</button>
          <hr />

          <ul>
            { items }
          </ul>
        </div>

        <div className={ styles.center }>
          {/* Main content here */}
        </div>

      </div>
    );
  }
}
