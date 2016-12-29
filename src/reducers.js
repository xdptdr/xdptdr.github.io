import { fromJS } from 'immutable';

var initialState = fromJS({
  page: 'home',
  enabled: 'true'
});

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'CLICK_BUTTON':
      return state.set('page', 'button');
	case 'TOGGLE_DISABLED':
      return state.set('enabled', !state.get('enabled'));
    default:
      return state;
  }
}