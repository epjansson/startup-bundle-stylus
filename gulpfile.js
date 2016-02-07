var gulp = require('gulp');
var stylus = require('gulp-stylus');
var normalize = require('normalize');
var rupture = require('rupture');
var typographic = require('typographic');
var poststylus = require('poststylus');
var lost = require('lost');
var notify = require('gulp-notify');
var nano = require('gulp-cssnano');
var concat = require('gulp-concat');

gulp.task('styles', function(){
    gulp.src('assets/stylus/app.styl')
        .pipe(stylus({
            use: [typographic(), rupture(), normalize(), poststylus(['lost'])]
        }))
        .pipe(gulp.dest('./css/')
    );
});

gulp.task('cssnano', function(){
    gulp.src('css/**/*.css')
        .pipe(nano())
        .pipe(notify("CSS fixed and compiled!"))
        .pipe(gulp.dest('./css/')
    );
});

gulp.task('js-concat', function(){
    gulp.src('assets/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./js/')
    );
});

gulp.task('watch', function(){
    gulp.watch('assets/stylus/**/*.styl', ['styles']);
    gulp.watch('assets/js/**/*.js', ['js-concat']);
    gulp.watch('css/**/*.css', ['cssnano']);

});
