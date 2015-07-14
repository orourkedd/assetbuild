var notify = require('gulp-notify');
var scriptsConcat = require('./scripts-concat');

module.exports = function (gulp, distName, config) {
	gulp.task('scripts-build-' + distName, ['browserify-' + distName, 'scripts-libs-' + distName], function () {
		return scriptsConcat(gulp, distName, config);
	});
};