'use strict';

var messages = {
	ok: {
		status: 200,
		message: ''
	},
	created: {
		status: 201,
		message: ''
	},
	noContent: {
		status: 204,
		message: ''
	},
	badRequest: {
		status: 400,
		key: 'err',
		message: 'Something went wrong.'
	},
	unauthorized: {
		status: 401,
		key: 'err',
		message: 'User not authorized.'
	},
	paymentRequired: {
		status: 402,
		key: 'err',
		message: 'Payment required.'
	},
	forbidden: {
		status: 403,
		key: 'err',
		message: 'Forbidden. Do NOT repeat request.'
	},
	notFound: {
		status: 404,
		key: 'err',
		message: 'Item not found.'
	},
	methodNotAllowed: {
		status: 405,
		key: 'err',
		message: 'The method was not allowed.'
	},
	preconditionFailed: {
		status: 412,
		key: 'err',
		message: 'We did not receive everything as expected.'
	},
	mediaType: {
		status: 415,
		key: 'err',
		message: 'Media type is not supported.'
	},
	serverError: {
		status: 500,
		key: 'err',
		message: 'Internal Server Error'
	},
	serviceUnavailable: {
		status: 503,
		key: 'err',
		message: 'Service Unavailable'
	},
	default: {
		status: 501,
		key: 'err',
		message: 'Error type not implemented. Did you use the correct type?'
	}
};

// Return standard response
// @requires res
// @requires type
// @requires options (optional)
// 		key
// 		message
// 		status
module.exports = function(res, type, options) {
	// Set error to default value
	var config = messages.default;
	var error;

	// Check if type exists
	if(messages.hasOwnProperty(type)) {
		// Overwrite config message
		config = messages[type];
	}

	// Overwrite config if options are available
	if(options) {
		// Overwrite status if available
		config.status = options.status || config.status;

		// Overwrite message if available
		config.message = options.message || config.message;

		// Create/overwrite key if available
		config.key = options.key || config.key;
	}

	// Set message to error as default
	error = config.message;

	// If config has a key, create an object
	if(config.key) {
		error = {};
		error[config.key] = config.message;
	}

	res.status(config.status).json(error);
};
