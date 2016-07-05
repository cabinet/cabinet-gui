import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class Details extends Component {

  constructor(props) {
    super(props)

    this.getAll = this.getAll.bind(this);
  }

  static propTypes = {
    // from react-router:
    params: PropTypes.object.isRequired,

    // from state:
    itemDetails: PropTypes.object.isRequired,
  };

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
    const { itemDetails, params } = this.props;
    const details = JSON.stringify(itemDetails[params.id]);

    return (
      <div>

        <div>
          <Link to="/">
            <i className="fa fa-times" /> Close details
          </Link>
          <hr />

          <h2>Details</h2>

          <p>id: { params.id }</p>
          <p>details: { details ? details : "< no details >" }</p>
        </div>

        <hr />

        Test request:

        <button onClick={ this.getAll }> GET ALL </button>

      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    itemDetails: state.itemDetails,
  };
}

export default connect(mapStateToProps)(Details);
