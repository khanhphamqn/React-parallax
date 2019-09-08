import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

const ParallaxItem = (WrappedComponent) => {
  return class extends Component {
    constructor(props){
      super(props);
      this.item = createRef();
      this.changeStyle = this.changeStyle.bind(this);
      this.state = {
        style: this.props.in
      }
    }
    static contextTypes = {
      in: PropTypes.object,
      register: PropTypes.func,
      changeColor: PropTypes.func,
    };
    componentDidMount(){
      this.context.register({
        el: this.item,
        in: this.props.in,
        out: this.props.out,
        change: this.changeStyle
      })
    }
    changeStyle(style){
      this.setState({
        style: style
      })
    }
    render() {
      const {
        children,
        ...otherProps
      } = this.props;
      const {
        style
      } = this.state;
      return (
        <WrappedComponent ref={this.item} context={this.context} {...otherProps} style={style}/>
      );
    }
  };
}
export default ParallaxItem;