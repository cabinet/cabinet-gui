import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './App.scss';

export default class App extends Component {
  static propTypes = {
    center: PropTypes.element,
  };

  constructor(props) {
    super(props);
  }

  render() {

    let items = [];
    for (let i = 0; i<=50; i++)
      items.push(<Link to={ "/" + i }>Item #{i} </Link>);

    return (
      <div className={ styles.app }>
        <div className={ styles.sidebar }>

          <h2>Sidebar</h2>
          { items }

        </div>

        <div className={ styles.center }>
          { this.props.center }
        </div>
      </div>
    );
  }
}
