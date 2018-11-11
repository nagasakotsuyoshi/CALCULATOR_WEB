var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./"
    }
  });
});
 
gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('sass', function(){
  gulp.src('./scss/*.scss')
      .pipe(sass({outputStyle : 'expanded'}))
      .pipe(gulp.dest('./css'));
});

gulp.task('sass-watch', function(){
  gulp.watch("./scss/*.scss", ['sass']);
});

gulp.task('default', ['sass', 'sass-watch', 'browser-sync'], function () {
  gulp.watch("./*.html", ['bs-reload']);
  gulp.watch("./css/*.css", ['bs-reload']);
});