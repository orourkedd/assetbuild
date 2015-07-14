module.exports = function (gulp, distName, config) {
	gulp.task('assets-compile-' + distName, function () {
		return gulp.start(['scripts-compile-' + distName, 'styles-compile-' + distName]);
	});
};