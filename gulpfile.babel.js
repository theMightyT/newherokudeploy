import gulp from 'gulp';
import concat from 'gulp-concat';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';

// compile sass
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);