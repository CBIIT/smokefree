var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var del = require('del');
var cache = require('gulp-cache');
var runSequence = require('run-sequence');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');

gulp.task('sass', function() {
	return gulp.src('src/scss/style.scss')
		.pipe(sass())
		.pipe(cleanCss())
		.pipe(gulp.dest('dist/css'))
});
gulp.task('js', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
});
gulp.task('images', function() {
	return gulp.src('src/images/**/*.+(png|jpg|jpeg|gif|svg)')
		.pipe(cache(imagemin()))
		.pipe(gulp.dest('dist/images'))
});
gulp.task('fonts', function() {
	return gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
});
gulp.task('clean-dist', function() {
	return del.sync('dist')
});
gulp.task('default', function(callback) {
	runSequence('clean-dist', ['sass', 'js', 'images', 'fonts'], callback)
});
