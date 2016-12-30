import React from 'react';
import './Button.css';

export default class Button extends React.Component {
	handleClick = (evt) => {
		let { enabled=true, onClick} = this.props;
		if(onClick) {
			onClick(enabled);
		}
	};
	render() {
		let {
			type = "button",
			style,
			text = "A button",
			className,
			classNamePrefix='',
			enabled=true
		} = this.props;
		let classNameR = "button";
		if(classNamePrefix) {
			classNameR = classNamePrefix+'-'+classNameR;
		}
		if(className) {
			classNameR+=" "+className;
		}
		let enabledR = null;
		if(enabled) {
			enabledR="enabled";
		} else {
			enabledR="disabled";
		}
		if(classNamePrefix) {
			enabledR=classNamePrefix+'-'+enabledR;
		}
		classNameR=classNameR+' '+enabledR;
		switch(type) {
			case 'input':
				return <input type="button" value={text} style={style} className={classNameR} onClick={this.handleClick} />;
			case 'submit':
				return <input type="submit" value={text} style={style} className={classNameR} onClick={this.handleClick} />;
			case 'div':
				return <div style={style} className={classNameR} onClick={this.handleClick}>{text}</div>;
			case 'span':
				return <span style={style} className={classNameR} onClick={this.handleClick}>{text}</span>;
			case 'a':
				return <a style={style} className={classNameR} onClick={this.handleClick}>{text}</a>;
			default:
				return <button style={style} className={classNameR} onClick={this.handleClick}>{text}</button>
		}
	}
}