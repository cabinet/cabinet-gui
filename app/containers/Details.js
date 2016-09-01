import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import styles from './Details.scss';

export default class Details extends Component {

  constructor(props) {
    super(props)
  }

  static propTypes = {
    // from react-router:
    params: PropTypes.object.isRequired,

    // from state:
    itemDetails: PropTypes.object.isRequired,
  };

  render() {
    const { itemDetails, params } = this.props;
    const details = JSON.stringify(itemDetails[params.id]);

    return (
      <div>
        <div className={ styles.details }>

        <div>
          <Link to="/" className={ styles.closeButton }>
            <i className="fa fa-times" /> Close
          </Link>
          <div className={ styles.title }>Details</div>
          <hr />


          <p>id: { params.id }</p>
          <p>details: { details ? details : "< no details >" }</p>
        </div>

        </div>
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
