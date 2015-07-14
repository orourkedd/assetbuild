var _ = require('lodash');

module.exports = function (gulp, distName, config) {
	config = _.assign({
		scriptLibs: [],
		styleLibs: [],
		browserify: {
			extensions: ['.jsx'],
			ignoreMissing: true
		},
		reactify: {
			extension: '.jsx',
			es6: true
		},
		nodeSass: {},
		tmpDir: '/tmp',
		dest: './server/public'
	}, config);

	require('./lib/scripts-browserify')(gulp, distName, config);
	require('./lib/scripts-build')(gulp, distName, config);
	require('./lib/scripts-compile')(gulp, distName, config);
	require('./lib/scripts-libs')(gulp, distName, config);

	require('./lib/styles-sass')(gulp, distName, config);
	require('./lib/styles-build')(gulp, distName, config);
	require('./lib/styles-compile')(gulp, distName, config);
	require('./lib/styles-watch')(gulp, distName, config);

	require('./lib/watch')(gulp, distName, config);
	require('./lib/assets-compile')(gulp, distName, config);
};