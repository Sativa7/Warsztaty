let gulp = require('gulp');
let sass = require('gulp-sass');

// gulp.task('cokolwiek' = (done) => {
//    console.log(cokolwiek);
//    done();
// });

gulp.task('sass', () => {
   return gulp.src('app/scss/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('app/css'));
});
//zatrzymujemy przez ctrl+z
gulp.task('watch', () => {
   gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
});