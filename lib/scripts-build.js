var concat = require('gulp-concat');
var notify = require('gulp-notify');

module.exports = function (gulp, distName, config) {

	gulp.task('scripts-build-' + distName, ['browserify-' + distName, 'scripts-libs-' + distName], function () {
		return gulp.src([
				'/tmp/' + distName + '/libs.js',
				'/tmp/' + distName + '/build.js'
			])
			.pipe(concat('main.js'))
			.pipe(gulp.dest('./server/public/' + distName + '/js'))
			.pipe(notify({
				message: 'Script Build complete.',
				subtitle: 'Build Success'
			}));
	});
};