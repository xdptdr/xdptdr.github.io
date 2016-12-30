import React from 'react';
import './MenuBar.css';
import Button from './Button.js';
import Spacing from './Spacing.js';

export default class MenuBar extends React.Component {
	handleMenuClicked = (menu) => {
		return (evt) => {
			var {onChange} = this.props;
			if(onChange) {
				onChange(menu);
			}
		};
	};
	render() {
		var {className, classNamePrefix} = this.props;
		let classNameR = "menubar";
		if(classNamePrefix) {
			classNameR = classNamePrefix+'-'+classNameR;
		}
		if(className) {
			classNameR+=" "+className;
		}
		return <div className={classNameR}>
		  <Button text="HOME" onClick={this.handleMenuClicked("home")}/>
		  <Spacing/>
		  <Button text="BUTTONS" onClick={this.handleMenuClicked("buttons")}/>
	    </div>;
	}
}