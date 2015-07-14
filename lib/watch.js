module.exports = function (gulp, distName, config) {
	gulp.task('watch-' + distName, function () {
		return gulp.start(['scripts-watch-' + distName, 'styles-watch-' + distName]);
	});
};