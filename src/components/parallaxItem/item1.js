import React, { Component, Fragment } from 'react';
import './index.scss';

class Item1 extends Component {
  render() {
    const {
      style
    } = this.props;
    return (
      <Fragment>
        <h2 style={style}>What is Lorem Ipsum?</h2>
      </Fragment>
    );
  }
}

export default Item1;