import React from 'react';
import './Spacing.css';

export default class Spacing extends React.Component {
	render() {
		var {className, classNamePrefix} = this.props;
		let classNameR = "spacing";
		if(classNamePrefix) {
			classNameR = classNamePrefix+'-'+classNameR;
		}
		if(className) {
			classNameR+=" "+className;
		}
		return <div className={classNameR}></div>;
	}
}