var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var coffeeify = require('coffeeify');
var shim = require('browserify-shim');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var scriptsConcat = require('./scripts-concat');

module.exports = function (gulp, distName, config) {
	//Init bundler for browserify and watchify
	var initBundler = function (watch) {
		//Browserify config
		var args = {
			extensions: ['.coffee', '.jsx'],
			ignoreMissing: true
		};

		//init bundler
		var bundler = browserify('./client/' + distName + '/js/main', args);

		if (watch) {
			bundler = watchify(bundler);
		}

		//add transforms
		bundler.transform(coffeeify);

		bundler.transform(reactify, {
			extension: '.jsx',
			es6: true
		});

		bundler.transform(shim);

		var bundle = function () {
			return bundler
				.bundle()
				.on('error', gutil.log.bind(gutil, 'Browserify Error'))
				.pipe(source('main'))
				.pipe(rename('build.js'))
				.pipe(gulp.dest('/tmp/' + distName))
				.on('end', function () {
					return scriptsConcat(gulp, distName, config);
				});
		};

		if (watch) {
			bundler.on('update', bundle);
		}

		return bundle();
	};

	//browserify
	gulp.task('browserify-' + distName, function () {
		return initBundler();
	});

	//watchify
	gulp.task('scripts-watch-' + distName, ['scripts-libs-' + distName], function () {
		return initBundler(true);
	});
};