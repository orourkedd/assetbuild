var concat = require('gulp-concat');
var gutil = require('gulp-util');

module.exports = function (gulp, distName, config) {

	gulp.task('scripts-libs-' + distName, function () {
		if (!config.scriptLibs || !config.scriptLibs.length) {
			return;
		}

		return gulp.src(config.scriptLibs)
			.pipe(concat('libs.js'))
			.pipe(gulp.dest(config.tmpDir + '/' + distName))
			.on('end', function () {
				gutil.log(gutil.colors.green('Libs Concat Complete'));
			});
	});
};