var gulp = require('gulp'),
    sass = require('gulp-sass'), 
    concatcss = require('gulp-concat-css');

gulp.task('blocks', function() {
    return gulp.src('app/scss/blocks/**/*.scss')
    	.pipe(concatcss("_blocks.scss"))
    	.pipe(gulp.dest('app/scss/blocks/'));
});

gulp.task('sass', function() {
    return gulp.src('app/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function() {
    gulp.watch('app/sсss/**/*.sсss', ['blocks','sass']); // Наблюдение за sass файлами
    // Наблюдение за другими типами файлов
});