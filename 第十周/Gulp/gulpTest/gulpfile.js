var gulp = require('gulp');
var uglify=require('gulp-uglify');
var concat=require('gulp-concat');
var paths={
	script:['JavaScript/*.js',]
};
gulp.task('scripts',function(){
	gulp.src(paths.script)
		.pipe(uglify())
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dest'));
});
gulp.task('default', function() {
	gulp.run('scripts');	
	gulp.watch(paths.script,function(){
		gulp.run('scripts');
	});
});