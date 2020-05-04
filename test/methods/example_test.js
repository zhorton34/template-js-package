'use strict';

module.exports = (it, expect, thing) => {
	it('should return array of any number of passed parameters', () => {
		expect(thing({}).example('one', 'two')).to.eql(['one', 'two']);
	});
};
