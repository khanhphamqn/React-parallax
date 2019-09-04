import React, { Component, Fragment } from 'react';
import './index.scss';

class Item3 extends Component {
  render() {
    const {
      style
    } = this.props;
    return (
      <Fragment>
        <h2 style={style}>khanhphamqn</h2>
      </Fragment>
    );
  }
}

export default Item3;