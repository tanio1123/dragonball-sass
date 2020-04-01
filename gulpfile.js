const gulp = require("gulp");
const cli = require("gulp-cli");
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");

gulp.task("default", function() {
  return gulp
    .src("./scss/*.scss")
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(gulp.dest("./css"));
});
