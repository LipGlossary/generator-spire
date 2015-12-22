global.gulp = require('gulp');
global.path = require('path');
global.environment = process.env.NODE_ENV || 'development';

global.$ = require('gulp-load-plugins')({
  pattern: [
    'gulp-*',
    'del',
    'main-bower-files',
    'browser-sync',
    'tosource']
});

require('./config');

var bulk = require('bulk-require');
bulk(__dirname, ['./tasks/*']);

gulp.task('watch-pre-task', ['clean', 'assets', 'sass', 'jade', 'assets:vendor', 'lint']);
gulp.task('default', ['watch-pre-task', 'js']);
