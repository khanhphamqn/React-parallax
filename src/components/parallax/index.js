import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ParallaxItem from './hoc';

export {
  ParallaxItem
}


class Parallax extends Component {
  lastScrollTop = 0;
  constructor(props){
    super(props);
    this.state = {
      items: [],
      color: this.props.color
    }
    this.register = this.register.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }
  static childContextTypes = {
    color: PropTypes.string,
    register: PropTypes.func,
    changeColor: PropTypes.func,
  };
  getChildContext() {
    return {
      color: this.state.color,
      register: this.register,
      changeColor: this.changeColor,
    };
  }
  changeColor(color){
    this.setState({
      color: color
    })
  }
  register(item){
    this.setState(({ items }) => ({
      items: items.concat(item),
    }));
  }
  componentDidMount(){
    window.addEventListener('scroll', this.onScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }
  getVisiableElementDown(el){
    return el.filter(aobj => {
      const wH = window.innerHeight;
			const bound = ReactDOM.findDOMNode(aobj.el.current).getBoundingClientRect();
			return (bound.top + bound.height/2) < wH
		})
  }
  getVisiableElementUp(el){
    return el.filter(aobj => {
      const wH = window.innerHeight;
			const bound = ReactDOM.findDOMNode(aobj.el.current).getBoundingClientRect();
			return (bound.top + bound.height) > wH
		})
  }
  doAnimation = function(els, prop){
		els.forEach(el => {
			const css = Object.assign({transitionDuration: '400ms'},el[prop]);
			el.change(css);
		});
	}
  onScroll(e){
    var st = window.pageYOffset || document.documentElement.scrollTop;
    let visibleEl = null;
    if (st > this.lastScrollTop){
      visibleEl = this.getVisiableElementDown(this.state.items);
      this.doAnimation(visibleEl, 'out');
    } else {
      visibleEl  = this.getVisiableElementUp(this.state.items);
      this.doAnimation(visibleEl, 'in');
    }
    this.lastScrollTop = st <= 0 ? 0 : st; 
  }
  render() {
    const {
      children
    } = this.props;
    return <Fragment>{children}</Fragment>;
  }
}

export default Parallax;