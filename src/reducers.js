import { fromJS } from 'immutable';
import _ from 'lodash';

let cats = ['cat_cart', 'cat_clean', 'cat_paper', 'cat_purr', 'cat_sleep', 'cat_tied'];

var initialState = fromJS({
  page: 'home',
  enabled: 'true',
  cat: _.sample(cats)+'.png'
});

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
	case 'TOGGLE_DISABLED':
      return state.set('enabled', !state.get('enabled'));
	case 'GOTO_PAGE':
      return state.set('page', action.page);
    default:
      return state;
  }
}