var concat = require('gulp-concat');
var notify = require('gulp-notify');

module.exports = function (gulp, distName, config) {

	gulp.task('styles-build-' + distName, ['styles-sass-' + distName], function () {

		var fs = require('fs');

		config.styleLibs.push(config.tmpDir + '/' + distName + '/build.css');

		return gulp.src(config.styleLibs)
			.pipe(concat('main.css'))
			.pipe(gulp.dest(config.dest + '/' + distName + '/css'))
			.pipe(notify({
				message: 'Sass build complete.',
				subtitle: 'Build Success'
			}));
	});
};