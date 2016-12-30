import React from 'react';
import './Popup.css';
import ReactDOM from 'react-dom';

export default class Popup extends React.Component {
	state = {
		deltaX:0
	};
	componentDidMount = () => {
		this.reposition();
	};
	componentDidUpdate = () => {
		this.reposition();
	};
	reposition = () => {
		let {left} = this.props;
		let oldDeltaX = this.state.deltaX;
		let newDeltaX = this.state.deltaX;
		let popupNode = ReactDOM.findDOMNode(this.refs.popup);
		let it = popupNode;
		let scrollingParent = document.body;
		while(it && it.parentNode !== it) {
			if(it.scrollTop > 0) {
				scrollingParent = it;
				break;
			}
			it = it.parentNode;
		}
		let x = popupNode.offsetLeft;
		let w = popupNode.offsetWidth;
		if(x+w>scrollingParent.offsetWidth) {
			newDeltaX=(left+w-scrollingParent.offsetWidth);
		}
		if(oldDeltaX !== newDeltaX) {
			this.setState({deltaX:newDeltaX});
		}
	};
	render() {
		let {left, top, children, style} = this.props;
		let {deltaX} = this.state;
		var styleR = {
			display:'inline-block',
			position:'absolute',
			left:left-deltaX,
			top,
			background:'pink',
			cursor:'pointer',
			whiteSpace:'nowrap',
			zIndex:1
		};
		
		if(style) {
			Object.assign(styleR, style);
		}
		
		return <span
			style={styleR}
			ref="popup"
		>{children}</span>;
	}
}