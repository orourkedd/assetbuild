var concat = require('gulp-concat');
var gutil = require('gulp-util');

module.exports = function (gulp, distName, config) {

	gulp.task('scripts-libs-' + distName, function () {
		if (!config.libs || !config.libs.length) {
			return;
		}

		return gulp.src(config.libs)
			.pipe(concat('libs.js'))
			.pipe(gulp.dest('/tmp/' + distName))
			.on('end', function () {
				gutil.log(gutil.colors.green('Libs Concat Complete'));
			});
	});
};