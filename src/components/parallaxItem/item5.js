import React, { Component, Fragment } from 'react';
import './index.scss';

class Item5 extends Component {
  render() {
    const {
      style
    } = this.props;
    return (
      <Fragment>
        <div className="square blue" style={style}></div>
      </Fragment>
    );
  }
}

export default Item5;