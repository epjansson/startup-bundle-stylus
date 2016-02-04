var gulp = require('gulp');
var stylus = require('gulp-stylus');
var normalize = require('normalize');
var rupture = require('rupture');
var typographic = require('typographic');

gulp.task('styles', function(){
    gulp.src('assets/stylus/app.styl')
        .pipe(stylus({
            use: [typographic(), rupture(), normalize()]
        }))
        .pipe(gulp.dest('./css/')
    );
});

gulp.task('watch', function(){
    gulp.watch('assets/stylus/**/*.styl', ['styles']);
});
