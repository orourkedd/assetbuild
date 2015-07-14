var concat = require('gulp-concat');
var notify = require('gulp-notify');

module.exports = function (gulp, distName, config) {
	return gulp.src([
			config.tmpDir + '/' + distName + '/libs.js',
			config.tmpDir + '/' + distName + '/build.js'
		])
		.pipe(concat('main.js'))
		.pipe(gulp.dest(config.dest + '/' + distName + '/js'))
		.pipe(notify({
			message: 'Script Build Complete'
		}));
};