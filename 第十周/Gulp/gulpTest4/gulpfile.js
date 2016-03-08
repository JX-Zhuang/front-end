var gulp = require('gulp');
var browserify = require('gulp-browserify');
gulp.task('default', function() {
    // body...
    return gulp.src('./src/main.js')
        .pipe(browserify())
        .pipe(gulp.dest('./bulid'));
});
