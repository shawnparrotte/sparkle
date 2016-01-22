'use strict';

// Required

var gulp     = require("gulp");
var uglify   = require("gulp-uglify");
var gSass    = require("gulp-sass");
var rename   = require("gulp-rename");
var plumber  = require("gulp-plumber");
var aPrefix  = require("gulp-autoprefixer");
var browserS = require("browser-sync");
var reload   = browserS.reload;

// Scripts

gulp.task("scripts", function () {
    gulp.src(["app/js/**/*.js", "!app/js/**/*.min.js"])
    .pipe(plumber())
    .pipe(rename({suffix: ".min"}))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(reload({stream: true}));
});

// Sass -> css

gulp.task("sass", function () {
  gulp.src("app/scss/**/*.scss")
  .pipe(plumber())
  .pipe(rename("styles.css"))
  .pipe(gSass().on('error', gSass.logError))
  .pipe(gulp.dest('dist/css'))
  .pipe(reload({stream: true}));
});

// HTML

gulp.task("html", function () {
    gulp.src("app/*.html")
    .pipe(gulp.dest("dist"))
    .pipe(reload({stream: true}));
});

// Browser Sync

gulp.task("browser-sync", function () {
  browserS({
    server : {
      baseDir : "./dist/"
    }
  })
});

// Watch

gulp.task("watch", function () {
  gulp.watch("app/js/**/*.js", ["scripts"]);
  gulp.watch("app/**/*.html", ["html"]);
  gulp.watch("app/scss/**/*.scss", ["sass"]);
})

// Default

gulp.task("default", ["scripts", "sass", "html", "browser-sync", "watch"]);
