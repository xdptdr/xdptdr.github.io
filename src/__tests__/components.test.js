import React from 'react';
import renderer from 'react-test-renderer';
import { App } from '../App';
import { fromJS } from 'immutable';

describe('components', function() {
  describe('<App />', function() {
it('renders correctly', function() {
 var tree = renderer.create(<App redux={fromJS({})} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});