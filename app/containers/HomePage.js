import React, { Component, PropTypes } from 'react';
import Home from '../components/Home';

export default class HomePage extends Component {
  // static propTypes = {
  //   center: PropTypes.element.isRequired
  // };

  render() {
    return (
      <div>
        <div className="sidebar">
        </div>
        <div className="center">
          <Home />
        </div>
      </div>
    );
  }
}
