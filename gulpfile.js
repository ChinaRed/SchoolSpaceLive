var gulp = require('gulp');
var sass = require('gulp-sass');
// var refresh = require('gulp-livereload');
var connect = require('gulp-connect');

gulp.task('connect', function () {
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
  .pipe(sass({ errLogToConsole: true }))
  .pipe(gulp.dest('./public/css'));
});

gulp.task('livereload', function () {
  gulp.src('./public/**/*')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch('./public/**/*', ['livereload']);
});

gulp.task('default', ['connect','watch', 'sass']);

// var nodemon = require('gulp-nodemon');
// var livereloadport = 23456;


// gulp.task('server', function () {
//   //restart server is app.js changes
//   nodemon({script: './server/server.js'})
//     .on('restart', function () {
//       console.log('going to restart server');
//       setTimeout(function () {
//         console.log('restarted server');
//         refresh.changed("server.js");
//       }, 500);
//     });
// });

// gulp.task('sass', function () {
//   return gulp.src('./sass/*.scss')
//   .pipe(sass({ errLogToConsole: true }))
//   .pipe(gulp.dest('./public/css'));
// });


// gulp.task('watch', function () {
//   //listen for livereload
//   refresh.listen(livereloadport);

//   gulp.watch('./sass/*.scss', ['sass']);
//   gulp.watch('./public/**/*', refresh.changed );

// });

// gulp.task('default', ['server','watch', 'sass']);