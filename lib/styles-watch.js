module.exports = function (gulp, distName, config) {
	gulp.task('styles-watch-' + distName, function () {
		return gulp
			.start('styles-build-' + distName)
			.watch(['client/' + distName + '/scss/**/*'], ['styles-build-' + distName]);
	});
};