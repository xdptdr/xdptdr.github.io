import { fromJS } from 'immutable';
import _ from 'lodash';

let cats = ['cat_cart', 'cat_clean', 'cat_paper', 'cat_purr', 'cat_sleep', 'cat_tied'];

var initialState = fromJS({
  page: 'home',
  enabled: 'true',
  cat: _.sample(cats)+'.png',
  contextMenuParams:{}
});

function updateScroll(state, action) {
	return state.setIn(['contextMenuParams','clientY'],
		state.getIn(['contextMenuParams','clientY']) +
		action.params.deltaY
	).setIn(['contextMenuParams','srcScrollTop'],action.params.scrollTop);
}

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
	case 'TOGGLE_DISABLED':
      return state.set('enabled', !state.get('enabled'));
	case 'GOTO_PAGE':
      return state.set('page', action.page);
	case 'CONTEXT_MENU_OPEN':
		return state.set('contextMenuParams', fromJS(action.params));
	case 'CONTEXT_MENU_CLOSE':
		return state.set('contextMenuParams', fromJS({}));
	case 'CONTEXT_MENU_UPDATE_SCROLL':
		return updateScroll(state, action)
    default:
      return state;
  }
}