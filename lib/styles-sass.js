var sass = require('gulp-sass');
var fs = require('fs');
var rename = require('gulp-rename');

module.exports = function (gulp, distName, config) {
	gulp.task('styles-sass-' + distName, function () {
		return gulp.src('./client/' + distName + '/scss/main.scss')
			.pipe(rename('build.css'))
			.pipe(sass.sync().on('error', sass.logError))
			.pipe(gulp.dest('/tmp/' + distName));
	});
};