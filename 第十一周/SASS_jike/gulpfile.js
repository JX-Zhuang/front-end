//引入依赖
var gulp = require('gulp');
var compass = require('gulp-compass');
var minifycss = require('gulp-minify-css');
//task
//编译sass 压缩css
gulp.task('compass', function() {
    gulp.src('jikexueyuan/sass/index.scss')
        .pipe(compass({
            css: 'jikexueyuan/css',
            sass: 'jikexueyuan/sass'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('jikexueyuan/css'))
});
gulp.task('default', ['compass'], function() {
    gulp.watch('jikexueyuan/sass/*.scss', ['compass']);
});
