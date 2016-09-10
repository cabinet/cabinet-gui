import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './index.scss';

export default class ItemList extends Component {

  onClick(item) {
    location.hash = '/' + item;
    this.selected = item;
  }

  render() {

    let items = [];
    for (let i = 0; i<=50; i++) {
      const css = this.selected == i ? styles.selected : null;
      const item =
        <div className={ styles.item + ' ' + css } onClick={ () => this.onClick(i) }>
          <div >Item #{i}</div>
        </div>;
      items.push(item);
    }

    return (
      <div className={ styles.list }>
        <div className={ styles.items }>
          { items }
        </div>
      </div>
    );
  }
}
