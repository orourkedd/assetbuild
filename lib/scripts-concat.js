var concat = require('gulp-concat');
var notify = require('gulp-notify');

module.exports = function (gulp, distName, config) {
	return gulp.src([
			'/tmp/' + distName + '/libs.js',
			'/tmp/' + distName + '/build.js'
		])
		.pipe(concat('main.js'))
		.pipe(gulp.dest('./server/public/' + distName + '/js'))
		.pipe(notify({
			message: 'Script Build Complete'
		}));
};