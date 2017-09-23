var gulp = require('gulp');
var sass = require('gulp-sass');
var concat  = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');

gulp.task('image-optimize', function() {
    return gulp.src(['./asset/img/*', './asset/img/**/*'])
        .pipe(imagemin([
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5})
        ], {
            verbose: true
        }))
        .pipe(gulp.dest('./build/img'));
});

gulp.task('sass-compile-merge-minify-css', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(cleanCSS())
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".css";
        }))
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('merge-uglify-js', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('default', ['image-optimize', 'sass-compile-merge-minify-css', 'merge-uglify-js']);