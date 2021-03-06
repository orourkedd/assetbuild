var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');

module.exports = function (gulp, distName, config) {
	gulp.task('styles-compile-' + distName, ['styles-build-' + distName], function () {
		return gulp.src(config.dest + '/' + distName + '/css/main.css')
			.pipe(minifycss())
			.pipe(rename('main.min.css'))
			.pipe(gulp.dest(config.dest + '/' + distName + '/css'));
	});
};