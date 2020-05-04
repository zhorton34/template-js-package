'use strict';

const variadic = require('../helpers/variadic');

/**
 * Example function accepting any number of arguments
 *
 * @param args
 * @returns {*}
 */
module.exports = function example(...args) {
	const parameters = variadic(args);

	const [first, ...rest] = parameters;

	return [first, rest];
};
