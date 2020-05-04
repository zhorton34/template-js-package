'strict'

function ExampleThing(options) {
  	if (options !== undefined && !Array.isArray(options) && typeof options !== 'object') {
    	this.data = [options];
  	} else if (options instanceof this.constructor) {
    	this.data = options;
  	} else {
    	this.data = options || {};
  	}
}

ExampleThing.prototype.example = require('./methods/example');

const thing = input => (new ExampleThing(input));

module.exports = thing;
module.exports.thing = thing;
module.exports.default = thing;
module.exports.ExampleThing = ExampleThing;
