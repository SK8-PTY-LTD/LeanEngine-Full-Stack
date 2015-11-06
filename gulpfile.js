var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var notify = require("gulp-notify");
var mocha = require('gulp-mocha');
var browserify = require('gulp-browserify');
var less = require('gulp-less');
var order = require('gulp-order');
var path = require('path');
var gls = require('gulp-live-server');
var shell = require('gulp-shell');

//Testing current framework
gulp.task('test', function() {
    return gulp.src('server-modules/app_node/test/*.js', {
        read: false
    }).pipe(order(['test.js',
        //   'file.js',
        //   'error.js',
        //   'object.js',
        //   'collection.js',
        'user.js',
        //   'query.js',
        //   'geopoint.js',
        //   'acl.js',
        //   'role.js',
        //   'master_key.js',
        //   'status.js',
        //   'sms.js',
        //   'search.js',
        //   'insight.js',
        //   'bigquery.js'
    ])).pipe(mocha({
        timeout: 300000,
    }));
});
//Testing TypeScript Objects, for future development
gulp.task('ts', function() {
    return gulp.src('server-modules/app_node/future/test/*.js', {
        read: false
    }).pipe(order(['test.js'
    ])).pipe(mocha({
        timeout: 300000,
    }));
});
gulp.task('app', function() {
    return gulp.src(['web-project/src/js/app.js', 'web-project/src/js/controllers.js', 'web-project/src/js/directives.js', 'web-project/src/js/filters.js', 'web-project/src/js/services.js'])
        //.pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('app-dev.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest('web-project/src/lib/'))
        .pipe(rename({
            basename: "app",
            suffix: ".min",
            extname: ".js"
        })).pipe(uglify()).pipe(gulp.dest('web-project/src/lib/'))
        .pipe(notify({
            message: 'Angular scripts concat, minified and uglified'
        }));
});
gulp.task('custom_app', function() {
    return gulp.src('server-modules/app_node/browser.js')
        .pipe(jshint.reporter('default'))
        .pipe(concat('custom_app.js'))
        .pipe(browserify({
            insertGlobals: true,
            debug: true
        }))
        .pipe(gulp.dest('web-project/src/lib/'))
        .pipe(rename({
            basename: "custom_app",
            suffix: ".min",
            extname: ".js"
        }))
        .pipe(uglify())
        .pipe(gulp.dest('web-project/src/lib/'))
        .pipe(notify({
            message: 'Shelf_Node built'
        }));
});
gulp.task('docs', function() {
    return gulp.src('server-modules/app_node/docs.js')
        .pipe(jshint.reporter('default'))
        .pipe(browserify({
            debug: true
        }))
        .pipe(rename({
            basename: "custom_app",
            suffix: "-doc",
            extname: ".js"
        }));
});
gulp.task('less', function() {
    return gulp.src('web-project/src/shop/*/css/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('web-project/src/shop/'));
});
// The default task (called when you run `gulp` from cli)
gulp.task('default', ['app', 'custom_app', 'docs']);