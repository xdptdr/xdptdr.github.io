import React from 'react';
import './PopupStory.css';
import Popup from './Popup.js';
import FaInfoCircle from 'react-icons/lib/fa/info-circle'
import ReactDOM from 'react-dom';

export default class PopupStory extends React.Component {
	handleContextMenu1 = (evt) => {
		evt.stopPropagation();
		evt.preventDefault();
		alert("screenX:" + evt.screenX + " ; " +
		"screenY:" + evt.screenY + " ; " +
		"clientX:" + evt.clientX + " ; " +
		"clientY:" + evt.clientY + " ; " +
		"pageX:" + evt.pageX + " ; " +
		"pageY:" + evt.pageY + " ; ");
	};
	handleContextMenu = (evt, popupId, destRef, srcRef) => {
		let {onContextMenu} = this.props;
		evt.stopPropagation();
		evt.preventDefault();
		let {screenX, screenY, clientX, clientY, pageX, pageY} = evt;
		let target = evt.target;
		let scrollTop = 0;
		while(target && target !== target.parentNode) {
			if(target.scrollTop) {
				scrollTop = target.scrollTop;
				break;
			}
			target = target.parentNode;
		}
		let srcScrollTop = 0;
		if(srcRef && this.refs[srcRef]) {
			srcScrollTop = ReactDOM.findDOMNode(this.refs[srcRef]).scrollTop;
		}
		if(destRef && this.refs[destRef]){
			let scrollTopDest = 0;
			let destNode = ReactDOM.findDOMNode(this.refs[destRef]);
			while(destNode && destNode.parentNode !== destNode) {
				if(destNode.scrollTop) {
					scrollTopDest = destNode.scrollTop;
					break;
				}
				destNode=destNode.parentNode;
			}
			scrollTop=scrollTopDest;
		}
		if(onContextMenu) {
			onContextMenu({
				screenX,
				screenY,
				clientX,
				clientY,
				pageX,
				pageY,
				scrollTop:scrollTop,
				popupId,
				destRef,
				srcScrollTop
			});
		}
	}
	handleContextMenu2 = (evt) => { this.handleContextMenu(evt,'popup'); };
	handleContextMenu3 = (evt) => { this.handleContextMenu(evt,'popup2'); };
	handleContextMenu4 = (evt) => { this.handleContextMenu(evt,'popup3'); };
	handleContextMenu5 = (evt) => { this.handleContextMenu(evt,'popup4'); };
	handleContextMenuF = (popupId, dest, src) => {
		return (evt) => {
			this.handleContextMenu(evt, popupId, dest, src);
		}
	};
	handleScroll = (evt) => {
		console.log('updateScroll');
		let {contextMenuParams, onUpdateScroll} = this.props;
		if(contextMenuParams.get('popupId')) {
			let scrollTop = evt.target.scrollTop;
			let previousScrollTop = contextMenuParams.get('srcScrollTop');
			if(scrollTop !== previousScrollTop && onUpdateScroll) {
				console.log(previousScrollTop-scrollTop);
				onUpdateScroll(previousScrollTop-scrollTop, scrollTop);
			}
		}
	};
	closePopup = (evt) => {
		let {onCloseContextMenu} = this.props;
		if(onCloseContextMenu) {
			onCloseContextMenu();
		}
	};
	render() {
		let {contextMenuParams} = this.props;
		let popup = null;	
		let popup2 = null;
		let popup3 = null;
		let popup4 = null;
		let popup5 = null;
		let popup6 = null;
		let popup7 = null;
		let popup8 = null;
		let popupId = contextMenuParams.get('popupId');
		let clientX = contextMenuParams.get('clientX');
		let clientY = contextMenuParams.get('clientY');
		let scrollTop = contextMenuParams.get('scrollTop');
		if(popupId === 'popup') {
			popup = <span style={{display:'inline-block'}}>A popup</span>
		}
		if(popupId === 'popup2') {
			popup2 = <span
				style={{
					display:'inline-block',
					position:'absolute',
					left:clientX,
					top:clientY,
					background:'pink',
					cursor:'pointer'
				}}
				onClick={this.closePopup}
			>A popup</span>
		}
		if(popupId === 'popup3') {
			popup3 = <span
				style={{
					display:'inline-block',
					position:'absolute',
					left:clientX,
					top:clientY,
					background:'pink',
					cursor:'pointer',
					whiteSpace:'nowrap',
					zIndex:1
				}}
				onClick={this.closePopup}
			>A very long popup</span>
		}
		if(popupId === 'popup4') {
			popup4 = <Popup
				type="span"
				left={clientX}
				top={clientY+scrollTop}
				style={{whiteSpace:'nowrap',cursor:'pointer'}}
			>
				<span onClick={this.closePopup}>A very long popup</span>
			</Popup>;
		}
		if(popupId === 'popup5') {
			popup5 = <Popup
				type="span"
				left={clientX}
				top={clientY+scrollTop}
				style={{whiteSpace:'nowrap',cursor:'pointer'}}
			>
				<span onClick={this.closePopup}>A very long popup</span>
			</Popup>;
		}
		if(popupId === 'popup6') {
			popup6 = <Popup
				type="span"
				left={clientX}
				top={clientY+scrollTop}
				style={{whiteSpace:'nowrap',cursor:'pointer'}}
			>
				<span onClick={this.closePopup}>A very long popup</span>
			</Popup>;
		}
		if(popupId === 'popup7') {
			popup7 = <Popup
				type="span"
				left={clientX}
				top={clientY+scrollTop}
				style={{whiteSpace:'nowrap',cursor:'pointer'}}
			>
				<span onClick={this.closePopup}>A very long popup</span>
			</Popup>;
		}
		if(popupId === 'popup8') {
			popup8 = <Popup
				type="span"
				left={clientX}
				top={clientY+scrollTop}
				style={{whiteSpace:'nowrap',cursor:'pointer'}}
			>
				<span onClick={this.closePopup}>A very long popup</span>
			</Popup>;
			if(this.refs['scroll8']) {
				if(this.refs['scroll8'].offsetTop-scrollTop>clientY) {
					popup8 = null;
				}
			}
		}
		return <div ref="page">
			<p>Popups menus seems trivial. What we want is the ability for the user to right click somewhere on the screen, and get something displayed at the location of the pointer.</p>
			<p>Let's suppose we want to have a popup menu on the following element, which does not have any yet.</p>
			<p><FaInfoCircle /></p>
			<p>How are we suppose to achieve this ? We may expect the element to be able to listen to <code>onContextMenu</code>. So let's do that.</p>
			<p><FaInfoCircle onContextMenu={this.handleContextMenu1} /></p>
			<p>Right clicking on that one will display the coordinates of the event. You're are expected from now on to try right clicking on any info circle you can see.</p>
			<p>Now, since we're using React and Redux because it is said to be so cool, we better trigger the display of the context menu through redux, i.e., call an action that will set some state variables.</p>
			<p>We may assume that there will only be one context menu at a time, so the click locations will be global. But we also need a way to distinguish among popup menus, so that popup menu needs to have an identifier.</p>
			<p>Ideally, we would like to have the identifier local to that particular page in the state space, but that would require a special scheme.</p>
			<p><FaInfoCircle onContextMenu={this.handleContextMenu2} />{popup}</p>
			<p>We manage here to set the popup on the right of the info circle, but that's not very popuppy. Besides, the icon is too small. Let's make it bigger.</p>
			<p><span style={{height:'128px',width:'128px',display:'inline-block'}}><FaInfoCircle style={{transform:'scale(8)',transformOrigin:'top left'}} onContextMenu={this.handleContextMenu3} /></span>{popup2}</p>
			<p>On that one, if you didn't scroll yet, the popup appears at the expected place, and even closes itself when clicking on it. Otherwise, use your imagination to mentally picture the expected result. Nice. What if the element happens to be at the far right of the screen ?</p>
			<p style={{height:'128px'}}><span style={{height:'128px',width:'128px',display:'inline-block',position:'absolute',right:'0px'}}><FaInfoCircle style={{transform:'scale(8)',transformOrigin:'top left'}} onContextMenu={this.handleContextMenu4} /></span>{popup3}</p>
			<p>You may notice that it is bad. The popup text overflows to the right, and a scroll bar appears. That's not what we want.</p>
			<p>What we want is to position the popup in such a way that if it goes off screen, it will reposition itself correctly.</p>
			<p style={{height:'128px'}}><span style={{height:'128px',width:'128px',display:'inline-block',position:'absolute',right:'0px'}}><FaInfoCircle style={{transform:'scale(8)',transformOrigin:'top left'}} onContextMenu={this.handleContextMenu5} /></span>{popup4}</p>
			<p>Will do this using the <code>componentDidMount</code> and <code>componentDidUpdate</code> callbacks. We need to do this because we have to wait for the element to be rendered before being able to measure it and move it accordingly. That repositioning will be triggered with a manual update and internal state variables, which is a possibly ugly way of doing this.</p>
			<p>Hmm, as I am writing, the content is getting longer and you have to scroll, and suddenly, although the popups scroll with the content, they do not appear where expected. Because I don't want to tackle this issue right now, I coded a kinda dirty fix that only works on the previous info circle, and for the next ones	.</p>
			<p>Now, let's put our popup system to the test. We will make a centered fixed-sized scrollable div, and have a menu pop up inside that div.</p>
			{popup5}
			<div style={{
				width:'300px',
				height:'300px',
				background:'yellow',
				margin:'0px auto',
				overflow:'auto'
			}}>
				<div style={{width:'100%',height:'500px', position:'relative'}}>
					
					<div style={{width:'50px',height:'50px',position:'absolute',top:'0px',left:'0px'}}>
						<FaInfoCircle style={{transform:'scale(3)',transformOrigin:'top left'}} onContextMenu={this.handleContextMenuF('popup5')} />
					</div>
					<div style={{width:'50px',height:'50px',position:'absolute',top:'0px',right:'0px'}}>
						<FaInfoCircle style={{transform:'scale(3)',transformOrigin:'top left'}} onContextMenu={this.handleContextMenuF('popup5')} />
					</div>
					<div style={{width:'50px',height:'50px',position:'absolute',bottom:'0px',left:'0px'}}>
						<FaInfoCircle style={{transform:'scale(3)',transformOrigin:'top left'}} onContextMenu={this.handleContextMenuF('popup5')} />
					</div>
					<div style={{width:'50px',height:'50px',position:'absolute',bottom:'0px',right:'0px'}}>
						<FaInfoCircle style={{transform:'scale(3)',transformOrigin:'top left'}} onContextMenu={this.handleContextMenuF('popup5')} />
					</div>
				</div>
			</div>
			<p>Note that to avoid clipping issues, the popup is set outside the div. The top corners work rather well, but the bottom ones have a problem: the scrolling inside the container is not taken into account. What we need to do is take into account two scrolling parameters. The scrolling of the element which was clicked, and the scrolling of the element in which the popup will be placed.</p>
			{popup6}
			<div style={{
				width:'300px',
				height:'300px',
				background:'yellow',
				margin:'0px auto',
				overflow:'auto'
			}}>
				<div style={{width:'100%',height:'500px', position:'relative'}}>
					<div style={{width:'50px',height:'50px',position:'absolute',top:'0px',left:'0px'}}>
						<FaInfoCircle style={{transform:'scale(3)',transformOrigin:'top left'}} onContextMenu={this.handleContextMenuF('popup6', 'page')} />
					</div>
					<div style={{width:'50px',height:'50px',position:'absolute',top:'0px',right:'0px'}}>
						<FaInfoCircle style={{transform:'scale(3)',transformOrigin:'top left'}} onContextMenu={this.handleContextMenuF('popup6', 'page')} />
					</div>
					<div style={{width:'50px',height:'50px',position:'absolute',bottom:'0px',left:'0px'}}>
						<FaInfoCircle style={{transform:'scale(3)',transformOrigin:'top left'}} onContextMenu={this.handleContextMenuF('popup6', 'page')} />
					</div>
					<div style={{width:'50px',height:'50px',position:'absolute',bottom:'0px',right:'0px'}}>
						<FaInfoCircle style={{transform:'scale(3)',transformOrigin:'top left'}} onContextMenu={this.handleContextMenuF('popup6', 'page')} />
					</div>
				</div>
			</div>
			<p>That's fine now. But now, scrolling the yellow div does not make the popup move, so we still have to track that scroll manually, and update the popup to reflect the change.</p>
			{popup7}
			<div style={{
				width:'300px',
				height:'300px',
				background:'yellow',
				margin:'0px auto',
				overflow:'auto',
			}}
				ref='scroll7'
				onScroll={this.handleScroll}>
				<div style={{width:'100%',height:'500px', position:'relative'}}>
					<div style={{width:'50px',height:'50px',position:'absolute',top:'0px',left:'0px'}}>
						<FaInfoCircle style={{transform:'scale(3)',transformOrigin:'top left'}} onContextMenu={this.handleContextMenuF('popup7', 'page', 'scroll7')} />
					</div>
					<div style={{width:'50px',height:'50px',position:'absolute',top:'0px',right:'0px'}}>
						<FaInfoCircle style={{transform:'scale(3)',transformOrigin:'top left'}} onContextMenu={this.handleContextMenuF('popup7', 'page', 'scroll7')} />
					</div>
					<div style={{width:'50px',height:'50px',position:'absolute',bottom:'0px',left:'0px'}}>
						<FaInfoCircle style={{transform:'scale(3)',transformOrigin:'top left'}} onContextMenu={this.handleContextMenuF('popup7', 'page', 'scroll7')} />
					</div>
					<div style={{width:'50px',height:'50px',position:'absolute',bottom:'0px',right:'0px'}}>
						<FaInfoCircle style={{transform:'scale(3)',transformOrigin:'top left'}} onContextMenu={this.handleContextMenuF('popup7', 'page', 'scroll7')} />
					</div>
				</div>
			</div>
			<p>Now, the popup is tracking the scrolling, and this is fine, but it is doing it too well. We do want the popup to appear slightly off when the handle is too far on the right or too far on the bottom. But once the popup is floating in the middle of the screen, something is definitely wrong. Finding a sensible policy in this case is not completely immediate.</p>
			<p>One way to handle this would be to hide the popup when the top left corner goes off limit. Let's do that.</p>
			{popup8}
			<div style={{
				width:'300px',
				height:'300px',
				background:'yellow',
				margin:'0px auto',
				overflow:'auto',
			}}
				ref='scroll8'
				onScroll={this.handleScroll}>
				<div style={{width:'100%',height:'500px', position:'relative'}}>
					<div style={{width:'50px',height:'50px',position:'absolute',top:'0px',left:'0px'}}>
						<FaInfoCircle style={{transform:'scale(3)',transformOrigin:'top left'}} onContextMenu={this.handleContextMenuF('popup8', 'page', 'scroll8')} />
					</div>
					<div style={{width:'50px',height:'50px',position:'absolute',top:'0px',right:'0px'}}>
						<FaInfoCircle style={{transform:'scale(3)',transformOrigin:'top left'}} onContextMenu={this.handleContextMenuF('popup8', 'page', 'scroll8')} />
					</div>
					<div style={{width:'50px',height:'50px',position:'absolute',bottom:'0px',left:'0px'}}>
						<FaInfoCircle style={{transform:'scale(3)',transformOrigin:'top left'}} onContextMenu={this.handleContextMenuF('popup8', 'page', 'scroll8')} />
					</div>
					<div style={{width:'50px',height:'50px',position:'absolute',bottom:'0px',right:'0px'}}>
						<FaInfoCircle style={{transform:'scale(3)',transformOrigin:'top left'}} onContextMenu={this.handleContextMenuF('popup8', 'page', 'scroll8')} />
					</div>
				</div>
			</div>
			<p>Now, it's better.</p>
			<p>Obviously, there are many remaining corner cases, horizontal scrolling has been completely ignored, as well as windows resizing.</p>
			<p>The code is also dispersed at various levels.</p>
			<p>And we will also have to deal with various setup of positionning.</p>
			<p>And with several levels of scrolling too.</p>
			<p>And it does not close when clicking outside of the popup.</p>
			<p>But we have enough to try creating a better popup component that will have more "reusability" in it.</p>
			<p>An early conclusion for a next better version of a popup component, is that it will be easier if the source and target components are provided in some way. A popup is not a vanilla React component. It exists on top of already existing components, so it would be logical that its state be dependent on the state of those other components.</p>
			<p>Each step was associated to some code refactoring that is difficult to show, and I only hope that reading this conveyed a feeling of the kinds of problems that one meets when doing user interface programming. If you happen to know about a true "React" component that allows doing popups "the right way", with all corner cases covered, I'll be glad to hear about it.</p>
		</div>;
	}
}
