'use strict';

var Q = require('q');

// Parse json in a safe way
// @requires data to parse
// @return promise or callback
module.exports = function(data, callback) {
	var d = Q.defer();

	if(typeof data !== 'object') {
		try {
			data = JSON.parse(data);
			d.resolve(data);
		}
		catch(e) {
			d.reject(e);
		}
	} else {
		d.resolve(data);
	}

	d.promise.nodeify(callback);
	return d.promise
};
