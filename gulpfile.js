var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');


//convert components scrpts from es6 to es5
gulp.task('2015JSIE', function() {
    return gulp.src([
            'js/components/about.js'
        ])
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(gulp.dest('js/components/es2015/'));
});

//components compression for prodcution
gulp.task('componentsJS', function() {
    return gulp.src([
            'js/components/function.js',
            'js/components/cms.js',
            'js/components/homepage.js',
            'js/components/stack.js',
            'js/components/showcase.js',
            'js/components/about.js',
            'js/components/talk.js'
        ])
        .pipe(concat('components.js'))
        .pipe(minify())
        .pipe(gulp.dest('assets/js/components/'));
});

//library compression for production
gulp.task('libJS', function() {
    return gulp.src(['js/lib/jquery.js', 'js/lib/logosDistort.js', 'js/lib/particleground.js', 'js/lib/TweenLite.js'])
        .pipe(concat('lib.js'))
        .pipe(minify())
        .pipe(gulp.dest('assets/js/lib/'));
});

//general minified version for IE
gulp.task('2015JSMinify', function() {
    return gulp.src([
            'js/components/es2015/function.js',
            'js/components/es2015/cms.js',
            'js/components/es2015/homepage.js',
            'js/components/es2015/stack.js',
            'js/components/es2015/showcase.js',
            'js/components/es2015/about.js',
            'js/components/es2015/talk.js'
        ])
        .pipe(concat('iecomponents.js'))
        .pipe(minify())
        .pipe(gulp.dest('assets/js/components/'));
});

//css convertion and minification for production
gulp.task('CSS', function() {
    return gulp.src('style/*.css')
        .pipe(autoprefixer())
        .pipe(cleanCSS({ compatibility: 'ie8', rebase: false }))
        .pipe(concat('style.min.css'))
        .pipe(minify())
        .pipe(gulp.dest('assets/css/'));
});


gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('default', ['componentsJS', 'libJS', 'CSS', '2015JSMinify'])