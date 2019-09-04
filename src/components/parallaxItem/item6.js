import React, { Component, Fragment } from 'react';
import './index.scss';

class Item6 extends Component {
  render() {
    const {
      style
    } = this.props;
    return (
      <Fragment>
        <div className="square pink" style={style}></div>
      </Fragment>
    );
  }
}

export default Item6;