var gulp = require('gulp'),
    gutil = require('gulp-util'), // responsible for console logging out output the build process
    source = require('vinyl-source-stream'), // handling text file from one part of the build process to the other
    browserify = require('browserify'), // responsible for figuring out which part of the code depends on what part code and make sure load order is done correctly
    watchify = require('watchify'), // tool to automatically rerun gulp file when the code is changed
    reactify = require('reactify'); //working with conjunction with browserify to convert jsx files into js

gulp.task('default', function(){
  bundler = watchify(browserify({
    entries: ['./src/app.jsx'], // starting point of the application. This is the first file that browserify is going to look to figure how to structure the code/file order.
    transform: [reactify], // tells browserify that while figuring out dependencies, it also needs to compile/transform jsx to js by using reactify module
    extensions: ['.jsx'], // files that need to look at while doing the build process
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  function build(file){
    if (file) gutil.log('Recompiling ' + file);
    return bundler
      .bundle() // runs "bundler" defined above
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('app.js'))
      .pipe(gulp.dest('./'));
  };

  build(); // having this to make sure that "build" function is called (do the compile and all) when gulp is executed
  bundler.on('update', build); // any time the specified entries files are changed, run "build" function again
});
