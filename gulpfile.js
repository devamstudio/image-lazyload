'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var babel = require('gulp-babel');

function scripts() {
	// Minified
	gulp.src( [
		'image-lazyload.js',
	] )
	.pipe( minify({ 
		noSource:true, 
		mangle: false,
		ext:{
			min:'.min.js'
		},
	}) )
	.pipe( gulp.dest('dist/') );
	
	// Original
	gulp.src( [
		'image-lazyload.js',
	] )
	.pipe( gulp.dest('dist/') );
	
	// Babelified
	gulp.src( [
		'image-lazyload.js',
	] )
	.pipe(babel({presets: ['@babel/env']}))
	.pipe( minify({ 
		noSource:true,
		mangle: false,
		compress: false,
		ext:{
			min:'-babel.js'
		},
	}) )
	.pipe( gulp.dest('dist/') )
	
	// Babelified and minified
	return gulp.src( [
		'image-lazyload.js',
	] )
	.pipe(babel({presets: ['@babel/env']}))
	.pipe( minify({ 
		noSource:true, 
		mangle: false,
		ext:{
			min:'-babel.min.js'
		},
	}) )
	.pipe( gulp.dest('dist/') )
};

function watch() {
	gulp.watch('*.js', scripts);
}

exports.scripts = scripts;
exports.watch = watch;

gulp.task('scripts', scripts);

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(gulp.parallel(scripts));
 
/*
 * You can still use `gulp.task` to expose tasks
 */
gulp.task('build', build);
 
/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', (build, watch) );