module.exports = function (gulp, distName, config) {
	gulp.task('watch-' + distName, function () {
		gulp.start(['scripts-watch-' + distName, 'styles-watch-' + distName]);
	});
};