var gulp = require('gulp');

var connect = require('gulp-connect');
var watch = require('gulp-watch');
var coffee = require('gulp-coffee');
var livereload = require('gulp-livereload');

gulp.task('webserver', function() {
  connect.server({
    livereload: true,
		root: './'
		//host: 'ajia.dev'
  });
});


gulp.task('coffee', function() {
  gulp.src('./app/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('reload',function(){
    livereload.listen();
    livereload.reload(['index.html']);
});

gulp.task('watch',function () {
    gulp.watch('app/*.coffee', ['coffee']);
});

gulp.task('default', ['webserver','coffee', 'watch']);
