//Gulp
//Gulp Documentation - http://gulpjs.com/
//Project Documentation - https://confluence.icfiweb.com/pages/viewpage.action?pageId=5865627

// Include gulp
//var gulp = require('gulp');
var gulp = require('gulp-help')(require('gulp'));

// Include Our Plugins
var sass            = require('gulp-sass'); // Docs: https://www.npmjs.com/package/gulp-sass
var jshint          = require('gulp-jshint'); // Docs: https://www.npmjs.com/package/gulp-jshint
var stylish         = require('jshint-stylish'); // Docs: https://www.npmjs.com/package/jshint-stylish
var browserSync     = require('browser-sync').create();
var notify          = require('gulp-notify');
var autoprefixer    = require('gulp-autoprefixer');
var imagemin        = require('gulp-imagemin');
var gutil           = require('gulp-util');
var rename          = require('gulp-rename');
var uglify          = require('gulp-uglify');
var del             = require('del');

var paths = {
    dist: 'dist', //dist folder
    src: 'src', //src folder
    scripts: 'src/js/**/*.js', //All scripts
    scripts_dist: 'dist/js', //Scripts Destination
    sass: 'src/sass/**/*.scss', //All SCSS
    css_dist_dir: 'dist/css', //css files after processing
    css_dist_files: 'dist/css/**/*.css', //css files after processing
    image_src: 'src/images/**/*', //source images
    image_dist: 'dist/images', //images after processing
    twig_templates: 'templates/**/*.twig', //twig templates
    site_url: "drupalvm.dev"
};

/************Working Tasks************/

// Reload browsers when files change
gulp.task('browserSync', function() {
    ////watch files
    var files = [
        paths.css_dist_files,
        paths.sass,
        paths.scripts,
        paths.image_src,
        paths.twig_templates
    ];

    //initialize browsersync
    browserSync.init(files, {
        //browsersync with a php server
        proxy: paths.site_url,
        notify: true
        //open: false //Stop browser sync from opening a new window
    });
    //Setting build using https://gist.github.com/zetagraph/065f4e026078323606de
});

// Prepare CSS - Compile Sass and autoprefix
gulp.task('sass', 'Compiles SASS int css and autoprefix the css', ['clean-css'], function() {
    return gulp.src( paths.sass )
        .pipe(sass().on('error', sass.logError)) //TODO: ADD NOTIFICATION (https://github.com/mikaelbr/gulp-notify/issues/81)
        .pipe(autoprefixer({
            browsers: ['> 1%', 'last 2 versions', 'IE 9']
        }))
        .pipe(gulp.dest(paths.css_dist_dir));
});

//Prepare JS - Lint
gulp.task('lint', 'Lints JavaScript files', function() {
    return gulp.src( paths.scripts )
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(notify(function (file) {
            if (file.jshint.success) {
                //Log a successfly lint
                gutil.log(gutil.colors.green('JS Lint Success'));
                return false;
            }

            var errors = file.jshint.results.map(function (data) {
            }).join("\n");
            return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
        }));
});

// Concat & Minify JS
gulp.task('scripts', 'Optimizes JavaScript files', ['clean-js'], function(){
    return gulp.src(paths.scripts)
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest( paths.scripts_dist ));
});

//Minify Images
gulp.task('images', 'Optimize Images', ['clean-images'], function() {
    return gulp.src( paths.image_src )
        // .pipe(imagemin({ progressive: true }))
        .pipe(gulp.dest(paths.image_dist));
});


/************Cleaning Tasks************/

//Clean dist folder - DELETE EVREYTHING in DIST FOLDER
gulp.task('clean-dist', 'DELETE EVREYTHING in dist folder', function () {
	// del() is used due to Unix style 'rm rf' function
	del(paths.dist);
});

//Clean src folder - DELETE EVREYTHING in SRC FOLDER
gulp.task('clean-src', 'DELETE EVREYTHING in SRC folder', function () {
	// del() is used due to Unix style 'rm rf' function
	del(paths.src);
});

//Clean dist folder - DELETE EVREYTHING in DIST FOLDER
gulp.task('clean-css', 'DELETE EVREYTHING in CSS folder', function () {
	// del() is used due to Unix style 'rm rf' function
	del(paths.css_dist_dir);
});

//Clean dist folder - DELETE EVREYTHING in DIST FOLDER
gulp.task('clean-js', 'DELETE EVREYTHING in JS folder', function () {
	// del() is used due to Unix style 'rm rf' function
	del(paths.scripts_dist);
});

//Clean dist folder - DELETE EVREYTHING in DIST FOLDER
gulp.task('clean-images', 'DELETE EVREYTHING in Images folder', function () {
    // del() is used due to Unix style 'rm rf' function
	del(paths.image_dist);
});


/************Watch Tasks************/

// Watch Files For Changes durring development
gulp.task('watch', 'Development: Watch files for changes and run gulp tasks on change. Also, auto-reload the browser.', ['browserSync', 'sass', 'lint', 'scripts'], function() {
    gulp.watch(paths.scripts,  ['lint', 'scripts']);
    gulp.watch(paths.sass, ['sass']);
});


/************Default Task************/

// Default Task
gulp.task('default', 'Run tasks to prep all files', ['images', 'lint', 'clean-dist', 'scripts', 'sass']);


// To add more Gulp tasks: Helpful URLs
// https://travismaynard.com/writing/getting-started-with-gulp
// https://www.appnovation.com/blog/using-libsass-gulp-browsersync-drupal-8-theme
// https://github.com/gulpjs/gulp/tree/master/docs/recipes#recipes
// https://github.com/google/web-starter-kit/blob/master/gulpfile.babel.js
// https://makina-corpus.com/blog/metier/2014/a-drupal-front-end-theme-with-bootstrap-less-and-gulp
// http://rupl.github.io/frontend-testing/#/
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/pass-arguments-from-cli.md

//TODO: Add other nessesary plugins - such as pre-commit, gulp-environments
//TODO: Add Documentation
//TODO: Research a producion pipeline

//How to debug iOS - https://iamsteve.me/blog/entry/using-browsersync-and-safari-for-testing-your-responsive-website