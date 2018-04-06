//Gulp is so 2016!

// Include All Plugins
var gulp = require('gulp');
// var less = require('gulp-less');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
// var tinify = require('gulp-tinify');
// var imageminJpegRecompress = require('imagemin-jpeg-recompress');
// var notify = require('gulp-notify');


/************Working Tasks************/

gulp.task('sass', function() {
    return gulp.src('src/scss/style.scss')
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