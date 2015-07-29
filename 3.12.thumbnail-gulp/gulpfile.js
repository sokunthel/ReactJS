var gulp = require('gulp'),
    react = require('gulp-react'),
    concat = require('gulp-concat');

gulp.task('default', function(){
  return gulp.src('src/**')
    .pipe(react()) // convert jsx files to js
    .pipe(concat('app.js')) // join all files into one
    .pipe(gulp.dest('./')) // save current working file into current directory
});
