var gulp = require('gulp');

//plugins
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');


var css = [
    './node_modules/bootstrap/dist/css/bootstrap.css'
];

//JS hint task
gulp.task('jshint', function(){
    gulp.src('./src/scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//minify images
gulp.task('imagemin', function(){
    var imgSrc = './src/images/**/*',
        imgDst = './build/images';
    
    gulp.src(imgSrc)
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
});

//minify HTML 
gulp.task('htmlmin', function(){
   var htmlSrc = './src/*.html', 
       htmlDst = './build';
       
   gulp.src(htmlSrc)
       .pipe(changed(htmlDst))
       .pipe(minifyHTML())
       .pipe(gulp.dest(htmlDst));    
});

//concat all source files, strip debug statements, and minify
gulp.task('scripts', function() {
  gulp.src(['./src/scripts/*.js'])
    .pipe(concat('script.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts/'));
});

gulp.task('styles', function() {
  gulp.src(css),
  gulp.src(['./src/styles/*.scss'])
    .pipe(sass({style: 'compressed'}))
    .pipe(concat('styles.css'))
    .pipe(autoprefix('last 2 versions','ie 8', 'ie 9'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/styles/'));
});

//gulp task
gulp.task('default', ['imagemin', 'htmlmin', 'scripts', 'styles'], function() {
    
    //watch HTML changes
    gulp.watch('./src/*.html', function() {
        gulp.run('htmlmin');
    });

    // watch for JS changes
    gulp.watch('./src/scripts/*.js', function() {
        gulp.run('jshint', 'scripts');
    });

    // watch for CSS changes
    gulp.watch('./src/styles/*.scss', function() {
        gulp.run('styles');
    });
    
    nodemon({
      script: './server.js',
      env: {
        'NODE_ENV': 'development'
      },
      ignore: ['/build']
    })
    
    return gutil.log('Gulp is running!')
});

