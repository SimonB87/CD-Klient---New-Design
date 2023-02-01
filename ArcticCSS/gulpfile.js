// Include Gulp plugins
var gulp = require('gulp'),
	less = require('gulp-stylus'),
	watch = require('gulp-watch'),
	prefix = require('gulp-autoprefixer'),
	plumber = require('gulp-plumber'),
	filter = require('gulp-filter'),
	rename = require('gulp-rename'),
	path = require('path')
	;

var paths = {
	stylus: ['stylus/*.styl', 'stylus/**/*.styl'],
	output1: '../NctsInt/main/CSS/',
	output2: '../NctsExt/main/CSS/',
	output3: '../AmsInt/main/CSS/',
	output4: '../AmsExt/main/CSS/',
	output5: '../RDEditor/main/CSS/',
}

// Compile STYLUS to CSS
function buildStylus(done) {
	const fileFilter = filter(['!stylus/**/*.styl', 'stylus/main.styl', 'stylus/gms.styl']);
	gulp.src(paths.stylus)
		.pipe(fileFilter)
		.pipe(plumber())
		.pipe(less())
		.pipe(gulp.dest(paths.output1))
		.pipe(gulp.dest(paths.output2))
		.pipe(gulp.dest(paths.output3))
		.pipe(gulp.dest(paths.output4))
		.pipe(gulp.dest(paths.output5))

	done();
};

// Watch all LESS files, then run build-less
function watchFiles() {
	return gulp.watch(paths.stylus, gulp.series('build-stylus'));
};

gulp.task('build-stylus', buildStylus);
gulp.task('watch', watchFiles);
gulp.task('default', buildStylus);