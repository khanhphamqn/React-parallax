import React, { Component, Fragment } from 'react';
import './index.scss';

class Item7 extends Component {
  render() {
    const {
      style
    } = this.props;
    return (
      <Fragment>
        <div className="square gradient" style={style}></div>
      </Fragment>
    );
  }
}

export default Item7;