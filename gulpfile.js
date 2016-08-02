var gulp = require('gulp');

//plugins

var jshint = require('gulp-jshint');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

//JS hint task
gulp.task('jshint', function(){
    gulp.src('./src/scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
})

//minify images
gulp.task('imagemin', function(){
    var imgSrc = './src/images/**/*',
    imgDst = './build/images';
    
    gulp.src(imgSrc)
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
})