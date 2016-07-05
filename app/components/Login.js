import React, { Component } from 'react';
import styles from './Login.scss';

export default class Login extends Component {

  constructor() {
    super();

    // explicit binding for class methods
    this.login = this.login.bind(this);
  }

  login(event) {
    event.preventDefault();
    console.log("LOGIN:", this.refs.username.value, this.refs.password.value);
  }

  render() {
    return (
      <div className={ styles.test }>

        <form action="">
          <label for='username'>Username:</label>
          <input type='text' ref='username' name='username' />
          <label for='password'>Password:</label>
          <input type='password' ref='password' name='password' />

          <br />
          <input type="submit" onClick={ this.login } />
        </form>

      </div>
    );
  }
}

