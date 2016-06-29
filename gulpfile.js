'use strict';

const gulp = require('gulp');
const gulpStylelint = require('gulp-stylelint');

gulp.task('lint:less', function () {
  return gulp.src('style.less')
    .pipe(gulpStylelint({
      failAfterError: true,
      syntax: 'less',
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }));
});
