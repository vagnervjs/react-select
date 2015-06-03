var gulp = require('gulp'),
    initGulpTasks = require('react-component-gulp-tasks');

var taskConfig = {

	component: {
		name: 'Select',
		less: {
			path: 'less',
			entry: 'default.less'
		}
	},

	example: {
		src: 'examples/src',
		dist: 'examples/dist',
		standalone: true,
		files: [
			'index.html',
			'standalone.html',
			'.gitignore'
		],
		scripts: [
			'app.js'
		],
		less: [
			'example.less'
		]
	}

};

initGulpTasks(gulp, taskConfig);


/* ==========================================================================
   Lib
   ========================================================================== */

var babel = require('gulp-babel');
var del = require('del');

gulp.task('clean:lib', function(done) {
	del('./lib', done);
});

gulp.task('build:lib', function() {
	return gulp.src([
			'./src/**/*.js',
			'!**/__tests__/**/*'
		])
		.pipe(babel({
			plugins: [require('babel-plugin-object-assign')]
		}))
		.pipe(gulp.dest('./lib'));
});

gulp.task('watch:lib', ['build:lib'], function() {
	return gulp.watch([
			'./src/**/*.js',
			'!**/__tests__/**/*'
		], ['build:lib']);
});
