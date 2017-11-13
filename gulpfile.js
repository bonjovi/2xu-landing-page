var gulp = require('gulp'),
    sass = require('gulp-sass'), 
    concatcss = require('gulp-concat'),
    clean = require('gulp-clean'),
    plumber = require('gulp-plumber');

gulp.task('blocks', function() {
    return gulp.src('app/scss/blocks/**/*.scss')
    	.pipe(concatcss("_blocks.scss"))
        .pipe(plumber())
    	.pipe(gulp.dest('app/scss/build/'));
});

gulp.task('sass', function() {
    return gulp.src('app/scss/main.scss')
        .pipe(sass())
        .pipe(plumber())
        .pipe(gulp.dest('app/css'))
});

gulp.task('clean', function () {  
    return gulp.src('app/scss/blocks/_blocks.scss', {read: false})
        .pipe(clean());
});

gulp.task('watch', function() {
    gulp.watch(['app/scss/**/*.scss', 'app/index.html'], ['blocks']);
    setTimeout(function() {
        gulp.watch(['app/scss/**/*.scss', 'app/index.html'], ['sass']);
    }, 1000);
    //gulp.watch('app/scss/**/*.scss', ['blocks']);
});