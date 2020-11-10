let gulp = require ('gulp'); 
let concat = require('gulp-concat');; 
let rename = require("gulp-rename");
let less = require('gulp-less');
let UglifyJS = require("uglify-js");
let cleanCSS = require('gulp-clean-css');
let del = require('del');
let imagemin = require('gulp-imagemin');
let imageminPngquant = require('imagemin-pngquant');
let autoprefixer = require('gulp-autoprefixer');
let spritesmith = require('gulp.spritesmith');
let browserSync = require('browser-sync').create();
let gulp = require ('gulp'); 


function defaultTask(cb) {
    console.log('Task works...');
    cb();
}
function done(cb) {
    console.log('Works good');
    cb();
}

//exports.done = done
//exports.default = defaultTask

gulp.task(done);
gulp.task('default', defaultTask);