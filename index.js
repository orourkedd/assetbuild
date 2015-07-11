module.exports = function (gulp, distName, config) {
	config = config || {};

	require('./lib/scripts-browserify')(gulp, distName, config);
	require('./lib/scripts-build')(gulp, distName, config);
	require('./lib/scripts-compile')(gulp, distName, config);
	require('./lib/scripts-libs')(gulp, distName, config);
};