// actions.test.js
import {
  clickButton
} from '../actions';

describe('actions', function() {
	describe('clickButton', function () {
		it('should have a type of "CLICK_BUTTON"', function() {
			expect(clickButton().type).toEqual('CLICK_BUTTON');
		});
	});
});