var gulp = require('gulp');
var stylus = require('gulp-stylus');
var normalize = require('normalize');
var rupture = require('rupture');
var typographic = require('typographic');
var poststylus = require('poststylus');
var lost = require('lost');
var notify = require('gulp-notify');
var nano = require('gulp-cssnano');

gulp.task('styles', function(){
    gulp.src('assets/stylus/app.styl')
        .pipe(stylus({
            use: [typographic(), rupture(), normalize(), poststylus(['lost'])]
        }))
        .pipe(gulp.dest('./css/')
    );
});

gulp.task('cssnano', function(){
    gulp.src('css/app.css')
        .pipe(nano())
        .pipe(notify("CSS fixed and compiled!"))
        .pipe(gulp.dest('./css/')
    );
});

gulp.task('watch', function(){
    gulp.watch('assets/stylus/**/*.styl', ['styles']);
    gulp.watch('css/*.css', ['cssnano']);
});
