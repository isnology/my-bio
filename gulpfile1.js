var gulp = require('gulp');

var postcss = require('gulp-postcss');

var processorArray = [
  //require('postcss-plugin')(),
  require('postcss-cssnext')({ browsers: ['last 2 versions', 'ie 6-8', 'Firefox > 20']  }),
  require('lost')(),
  require('postcss-image-set-polyfill')(),
];

gulp.task('styles', function () {
  return gulp.src('assets/css/main.css')
      .pipe(postcss(processorArray))
      .pipe(gulp.dest('assets/postcss'))
});

gulp.watch('assets/css/main.css', ['styles']);

gulp.task('default', ['styles']);