var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

module.exports = function (gulp, distName, config) {
	gulp.task('scripts-compile-' + distName, ['scripts-build-' + distName], function () {
		return gulp
			.src(config.dest + '/' + distName + '/js/main.js')
			.pipe(plumber())
			.pipe(uglify())
			.pipe(rename('main.min.js'))
			.pipe(gulp.dest(config.dest + '/' + distName + '/js'))
			.on('end', function () {
				process.exit();
			});
	});
};