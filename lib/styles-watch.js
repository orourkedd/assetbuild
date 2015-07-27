module.exports = function(gulp, distName, config) {
  gulp.task('styles-watch-' + distName, function() {
    return gulp
      .start('styles-build-' + distName)
      .watch([config.src + '/' + distName + '/scss/**/*'], ['styles-build-' + distName]);
  });
};