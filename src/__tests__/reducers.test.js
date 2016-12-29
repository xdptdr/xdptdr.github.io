// __tests__/reducer.test.js
import mainReducer from '../reducers';
import { fromJS } from 'immutable';

describe('mainReducer', function() {
  it('should return the initial state', function() {
    expect(mainReducer(undefined, {})).toEqual(fromJS({
            location: '',
          data: {},
          dates: [],
          temps: [],
          selected: {
            date: '',
            temp: null
          }
        }));
  });
});