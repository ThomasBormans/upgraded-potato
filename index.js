'use strict';

// Require all lib's
var error = require('./lib/error');
var safeJsonParse = require('./lib/safeJsonParse');

// Export each lib
module.exports = {
	error: error,
	safeJsonParse: safeJsonParse
};
