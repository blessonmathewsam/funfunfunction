var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();

gulp.task('build', function(){
  return browserify({entries: ['src/promises.js'], extensions: ['.js']})
    .transform(babelify.configure({
        presets : ["es2015"]
    }))
    .bundle()
    .pipe(source('promises.bundled.js'))
    .pipe(gulp.dest('build'))
});

gulp.task('watch', ['build', 'browserSync'], function(){
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('src/**/*.js', ['build', browserSync.reload]);
});

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: '.'
    }
  })
});
