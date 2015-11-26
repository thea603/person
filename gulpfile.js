var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    mincss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    js = require('gulp-uglify');
 
gulp.task('person', function () {
    return gulp.src('css/show_page.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('css'));
   
});

gulp.task('cssmin',function(){
     return gulp.src('css/index.css')
     		.pipe(rename({suffix:'.min'}))
     		.pipe(mincss())
     		.pipe(gulp.dest('css'));
})
gulp.task('jsmin',function(){
     return gulp.src('js/index.js')
            .pipe(rename({suffix:'.min'}))
            .pipe(js())
            .pipe(gulp.dest('js'));
})