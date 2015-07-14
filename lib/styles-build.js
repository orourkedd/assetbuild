var concat = require('gulp-concat');
var notify = require('gulp-notify');

module.exports = function (gulp, distName, config) {

	gulp.task('styles-build-' + distName, ['styles-sass-' + distName], function () {

		config.styleLibs.push('/tmp/' + distName + '/css/main.css')

		return gulp.src(config.styleLibs)
			.pipe(concat('main.css'))
			.pipe(gulp.dest('./server/public/' + distName + '/css'))
			.pipe(notify({
				message: 'Sass build complete.',
				subtitle: 'Build Success'
			}));
	});
};