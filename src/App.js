import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import {
  clickButton
} from './actions';


export class App extends React.Component {
	render() {
		return <div>
			<h1>Welcome to XPTDR's React <a href="https://github.com/xdptdr">GitHub</a> page</h1>
			<p>I'm using this page for experimenting with React.</p>
			<p>I got started here with <a href="http://academy.plot.ly/#frontend">the Plotly academy tutorial</a></p>
			<p>I learnt about that tutorial on the <a href="https://facebook.github.io/jest/">Jest</a> project page.</p>
			<p>Now, here's a button.</p>
			<div style={{textAlign:"center"}}><button>I'm a lovely sexy button</button></div>
		</div>;
	}
}

function mapStateToProps(state) {
  return {
        redux: state
    };
}

export default connect(mapStateToProps)(App);