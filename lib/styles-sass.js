var sass = require('gulp-ruby-sass');
var fs = require('fs');

module.exports = function (gulp, distName, config) {
	gulp.task('styles-sass-' + distName, function () {

		if (!fs.existsSync('./client/' + distName + '/scss/main.scss')) {
			console.log('No sass files found.');
			return;
		}

		return sass('./client/' + distName + '/scss/main.scss', {
			sourceMap: false,
			lineNumbers: true,
			compass: true
		}).on('error', function (err) {
			console.log(err.message);
		}).pipe(gulp.dest('/tmp/' + distName + '/css'));
	});
};