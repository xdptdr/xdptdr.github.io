import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Button from './Button.js';
import ReactDOMServer from 'react-dom/server'
import beautify from 'json-beautify';
import _ from 'lodash';

import {
  clickButton,
  toggleDisabled
} from './actions';


export class App extends React.Component {
	clickButton = (evt) => {
        this.props.dispatch(clickButton());
    };
	toggleDisabled = (evt) => {
		this.props.dispatch(toggleDisabled());
	};
	handleDemoClick = (enabled) => {
		if(enabled) {
			alert('Button is enabled. Making coffee.');
		} else {
			alert('You are not expected to click here. Button is disabled.');
		}
	};
	render() {
	
		let jsonify = function(c) {
			return ReactDOMServer.renderToStaticMarkup(c);
		}
	
		let page = this.props.redux.get('page');
		let enabled = this.props.redux.get('enabled');
		
		let standardButtonStyle={
			backgroundColor:'rgb(221,221,221)',
			display:'inline-block',
			fontSize:'13.3333px',
			fontFamily:'Arial',
			border:'2px outset rgb(221,221,221)',
			boxSizing:'border-box',
			padding:'1px 6px',
			WebkitAppearance:'push-button'
		};
		
		let googleButtonStyle={
			display:'inline-block',
			border:'1px solid #4285f4',
			boxSizing:'border-box',
			padding:'0 12px',
			fontWeight:'bold',
			color:'white',
			background:'-webkit-linear-gradient(top,#4387fd,#4683ea)',
			lineHeight:'28px',
			borderRadius:'2px',
			fontFamily:'arial,sans-serif',
			fontSize:'13px'
		};
		
		switch(page) {
			case 'button':
				let b1 = <Button text="A button" type="button" />;
				let b2 = <Button text="A button"  type="input"/>;
				let b3 = <Button text="A button"  type="submit"/>;
				let b4 = <Button text="A button" type="div" style={standardButtonStyle} />;
				let b5 = <p>A <Button text="button" type="span" style={standardButtonStyle} /> in a paragraph.</p>;
				let b6 = <p>A link <Button text="button" type="a" style={standardButtonStyle} /> in a paragraph.</p>;
				let b1g = <Button text="Sign in" type="button"  style={googleButtonStyle} />;
				let b2g = <Button text="Sign in"  type="input" style={googleButtonStyle} />;
				let b3g = <Button text="Sign in"  type="submit" style={googleButtonStyle} />;
				let b4g = <Button text="Sign in" type="div" style={googleButtonStyle} />;
				let b5g = <p>A button <Button text="Sign in" type="span" style={googleButtonStyle} /> in a paragraph.</p>;
				let b6g = <p>A link button <Button text="Sign in" type="a" style={googleButtonStyle} /> in a paragraph.</p>;
				let b1c = <Button text="Sign in" type="button"  className='googleButton' />;
				let b2c = <Button text="Sign in"  type="input" className='googleButton' />;
				let b3c = <Button text="Sign in"  type="submit" className='googleButton' />;
				let b4c = <Button text="Sign in" type="div" className='googleButton' />;
				let b5c = <p>A button <Button text="Sign in" type="span" className='googleButton' /> in a paragraph.</p>;
				let b6c = <p>A link button <Button text="Sign in" type="a" className='googleButton' /> in a paragraph.</p>;
				let b1d = <Button text="Sign in" type="button"  className='googleButton' enabled={enabled} onClick={this.handleDemoClick} />;
				let b2d = <Button text="Sign in"  type="input" className='googleButton' enabled={enabled} onClick={this.handleDemoClick} />;
				let b3d = <Button text="Sign in"  type="submit" className='googleButton' enabled={enabled} onClick={this.handleDemoClick} />;
				let b4d = <Button text="Sign in" type="div" className='googleButton' enabled={enabled} onClick={this.handleDemoClick} />;
				let b5d = <p>A button <Button text="Sign in" type="span" className='googleButton' enabled={enabled} onClick={this.handleDemoClick} /> in a paragraph.</p>;
				let b6d = <p>A link button <Button text="Sign in" type="a" className='googleButton' enabled={enabled} onClick={this.handleDemoClick} /> in a paragraph.</p>;
				let b1red = <Button text="Sign in" type="button"  className='googleButton red' enabled={enabled} onClick={this.handleDemoClick} />;
				return <div>
					<p>So, what is a button ?</p>
					{b1}
					<pre>{jsonify(b1)}</pre>
					<p>A button is basically a rectangular interactive zone of the screen on which the user can click.</p>
					<p>That's all.</p>
					<h2>Various kinds of buttons</h2>
					<p>In HTML, there is the <code>button</code> element, as shown above.</p>
					<p>But in forms, there's also the <code>input</code> kind of button.</p>
					{b2}
					<pre>{jsonify(b2)}</pre>
					<p>And the <code>submit</code> kind of button.</p>
					{b3}
					<pre>{jsonify(b3)}</pre>
					<p>For fancier uses, it is common to use a styled div instead. Here's one that reproduces the style of the previous buttons on Chrome. It will look different on other browsers.</p>
					{b4}
					<pre>{jsonify(b4)}</pre>
					<p>Using <code>div</code>s is fine. It's highly customizable. All would seem well. Then the time comes when that beloved button must appear in the middle of a paragraph. And then, everything's broken, because div shall not appear in paragraph. So we may use a <code>span</code> instead.</p>
					{b5}
					<pre>{jsonify(b5)}</pre>
					<p>Or a link (<code>a</code>).</p>
					{b6}
					<pre>{jsonify(b6)}</pre>
					<h2>The style of many kinds</h2>
					<p>At the end of the day, whichever kind of button is chosen, whichever browser it is displayed on, the designer does not care. They should all look the same. That is to say, unless they should look different. And because I'm bad at design, I'm gonna steal the style and style the steal directly from Google.</p>
					<p>These six buttons should look the same in all browsers</p>
					<div>{b1g}</div>
					<div>{b2g}</div>
					<div>{b3g}</div>
					<div>{b4g}</div>
					{b5g}
					{b6g}
					<h2>Cursor and hover</h2>
					<p><a href="https://speakerdeck.com/vjeux/react-css-in-js">Someone says</a> that with React, inline styles are fine, because it avoids the global namespace pollution issues that comes with CSS. Unfortunately, using selectors such as <code>hover</code> does not work with inline styles, so here are the same buttons with a CSS class, and an hover effect, and a cursor.</p>
					<div>{b1c}</div>
					<div>{b2c}</div>
					<div>{b3c}</div>
					<div>{b4c}</div>
					{b5c}
					{b6c}
					<h2>Disabled button</h2>
					<p>Now, what about disabled button ? We are taught that we should use the <code>disabled</code> attribute. But there are two problems with that attribute:</p>
					<ol>
						<li>First, <code>disabled</code> only works and standard buttons. Custom buttons require some CSS, and using the <code>disabled</code> attribute on <code>div</code>, <code>span</code> or <code>a</code> elements is bad.</li>
						<li>Second, a disabled button will not respond to clicks, even if you would like to explain to the user why the button is disabled when the user clicks on it.</li>
						<li>If you have some CSS rules for disabled button hidden in a library somewhere, you'll have to copy these rules manually into a CSS class. That's bad.</li>
					</ol>
					<p>There's only one conclusion: don't use <code>disabled</code>. Never. And you'll be safe.</p>
					<p>So, here's a checkbox that will enable or disable all the buttons, and here are six different buttons which can be disabled. When enabled, the button says something. When disabled, the button explains that it is disabled.</p>
					<div><input type="checkbox" checked={enabled?'checked':''} onChange={this.toggleDisabled} />{enabled?"Enabled":"Disabled"}</div>
					<div>{b1d}</div>
					<div>{b2d}</div>
					<div>{b3d}</div>
					<div>{b4d}</div>
					{b5d}
					{b6d}
					<h2>Customizing the styles</h2>
					<p>We may want to change the color of the buttons. Comming with nice colors schemes is somewhat difficult, so these colors should be stored at some unique place. Also, when the color changes, the border color may change, and the text color may change too. I feel like going CSS here. But I took some precautions. First, the CSS for the buttons should go into the <code>Button.css</code> file. Second, the <code>Button</code> component accepts a CSS prefix, so that if a new CSS library introduces conflicts, the application-specific styles can be renamed. That would be a painful operation, but there's at least a mitigation mechanism for that event. Third, all modifications should be qualified in CSS. Thus, if I want a red button, I would introduce a <code>.button.red</code> rule. If a library introduces a <code>red</code> class name, it won't be qualified against the button, so I'll be safe. Here's an example:</p>
					<div>{b1red}</div>
					<h2>On the size of buttons</h2>
					<p>When there is a single button somewhere, it's usually acceptable to set some padding, and everything's fine.</p>
					<p>But sometimes, there are two buttons, like in a dialog box, and we want these two buttons to have the same sizes, irrespective of content</p>
					<p>Ideally, if one of the buttons gets too big, we would like to change the layout, e.g., to have them stacked instead of side by side.</p>
					<p>And also, if there are several buttons, we would like to have some small spacing between the buttons, but not between the first and last one.</p>
				</div>;
			default:
				return <div>
					<h1>Welcome to XDPTDR's React <a href="https://github.com/xdptdr">GitHub</a> page</h1>
					<p>I'm using this page for experimenting with React.</p>
					<p>I got started here with <a href="http://academy.plot.ly/#frontend">the Plotly academy tutorial</a></p>
					<p>I learnt about that tutorial on the <a href="https://facebook.github.io/jest/">Jest</a> project page.</p>
					<p>Now, here's a button.</p>
					<div style={{textAlign:"center"}}><button onClick={this.clickButton}>I'm a lovely sexy button</button></div>
				</div>;
		}
	}
}

function mapStateToProps(state) {
  return {
        redux: state
    };
}

export default connect(mapStateToProps)(App);