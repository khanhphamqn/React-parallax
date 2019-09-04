import React, { Component, Fragment } from 'react';
import './index.scss';

class Item4 extends Component {
  render() {
    const {
      style
    } = this.props;
    return (
      <Fragment>
        <p style={style}>I am Frontend developer. I do have more than 7 years' experience. I do love code. I have promoted to be Frontend teamleader and have 3 years' experience on that role</p>
      </Fragment>
    );
  }
}

export default Item4;