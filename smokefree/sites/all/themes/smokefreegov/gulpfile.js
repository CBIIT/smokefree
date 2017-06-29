//Gulp is so 2016!

// Include All Plugins
var gulp = require('gulp');
// var less = require('gulp-less');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var del = require('del');
var cache = require('gulp-cache');
var runSequence = require('run-sequence');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var cssnano = require('gulp-cssnano');
var cached = require('gulp-cached');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');


/************Working Tasks************/

// gulp.task('less', function() {
// 	return gulp.src('src/less/style.less')
// 		.pipe(less())
// 		//.pipe(cleanCss())
//         .pipe(cssnano())
// 		.pipe(gulp.dest('dist/css'))
// });
gulp.task('sass', function() {
    return gulp.src('src/scss/style.scss')
        //.pipe(sass().on('error', sass.logError))
        //.pipe(cleanCss())
        //.pipe(cssnano())
        //.pipe(gulp.dest('css'))
        .pipe(sourcemaps.init())
        .pipe(sass({
            noCache: true,
            outputStyle: "compressed",
            lineNumbers: false,
            loadPath: 'css/*',
            sourceMap: true
        })).on('error', function(error){
            gutil.log(error);
            this.emit('end');
        })
        .pipe(sourcemaps.write('src/maps'))
        .pipe(gulp.dest('css'))
        .pipe(notify({
            title: "SASS Compiled",
            message: "All SASS files have been recompiled to CSS",
            onLast: true
        }));
});
gulp.task('js', function() {
	return gulp.src('src/js/**/*.js')
		//.pipe(minify())
        .pipe(cached('script'))
        .pipe(uglify())
		.pipe(gulp.dest('js'))
});
gulp.task('images', function() {
	return gulp.src('src/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(cache(imagemin()))
        .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true, multipass: true}))
		.pipe(gulp.dest('images'))
});
gulp.task('fonts', function() {
	return gulp.src('src/fonts/**/*')
		.pipe(gulp.dest('fonts'))
});

/************Cleaning Tasks************/

gulp.task('clean-up', function() {
	//return del.sync('dist')
    return del([
        //'dist/css/**/*', //who put images folder under css folder? Please move it under smokefree theme root folder
        'css/style.css',
        'js/**/*',
        'images/**/*',
    ])
});

/************Default Task************/

// Default Task
gulp.task('default', function(callback) {
	runSequence('clean-up', ['sass', 'js', 'images'], callback)
});