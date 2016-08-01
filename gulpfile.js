var gulp = require('gulp');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var karma = require('karma').Server;

var src = {
    scss: 'app/scss/*.scss',
    css:  'app/css',
    html: 'app/*.html'
};

gulp.task('browser-sync', function(){
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./*.css').on('change', browserSync.reload);
	gulp.watch('./*.js').on('change', browserSync.reload);
});

gulp.task('concat-scripts', function(){
	gulp.src([jquery.js, reveal.js])
	//^names of all js files in project
	.pipe(concat('app.js'))
	.pipe(gulp.dest('js'));
});

gulp.task('sass', function() {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () { gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('test', function(done){
new karma({
configFile: __dirname + '/karma.conf.js'
}, done).start();
});

gulp.task('default', ['sass:watch', 'browser-sync']);