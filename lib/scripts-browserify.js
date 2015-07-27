var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
//var coffeeify = require('coffeeify');
var shim = require('browserify-shim');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var scriptsConcat = require('./scripts-concat');

module.exports = function(gulp, distName, config) {
	//Init bundler for browserify and watchify
	var initBundler = function(watch) {
		//Browserify config
		//init bundler
		var bundler = browserify(config.src + '/' + distName + '/js/main', config.browserify);

		if (watch) {
			bundler = watchify(bundler);
		}

		//add transforms
		//bundler.transform(coffeeify);

		if (!config.noReactify) {
			bundler.transform(reactify, config.reactify);
		}

		if (!config.noShim) {
			bundler.transform(shim);
		}

		var bundle = function() {
			return bundler
				.bundle()
				.on('error', gutil.log.bind(gutil, 'Browserify Error'))
				.pipe(source('main'))
				.pipe(rename('build.js'))
				.pipe(gulp.dest(config.tmpDir + '/' + distName))
				.on('end', function() {
					return scriptsConcat(gulp, distName, config);
				});
		};

		if (watch) {
			bundler.on('update', bundle);
		}

		return bundle();
	};

	//browserify
	gulp.task('browserify-' + distName, function() {
		return initBundler();
	});

	//watchify
	gulp.task('scripts-watch-' + distName, ['scripts-libs-' + distName], function() {
		return initBundler(true);
	});
};