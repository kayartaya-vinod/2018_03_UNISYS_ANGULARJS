var gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var styles = require('./styles');
var scripts = require('./scripts'); // scripts.json

gulp.task('connect', function () {
    connect.server({
        base: 'http://localhost',
        port: 9000,
        root: './dist',
        livereload: true
    });
});

gulp.task('css', function(){
    gulp.src(styles)
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload());
});

gulp.task('js', function () {
    browserify(scripts)
        .transform(babelify)
        .bundle()
        .pipe(source('all.js'))
        .pipe(gulp.dest('./dist/scripts'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.js', ['js']);
    gulp.watch('./src/**/*.html', ['html']);
});

gulp.task('default', ['css', 'js', 'html', 'connect', 'watch']);