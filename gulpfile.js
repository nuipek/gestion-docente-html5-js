/**
 * Created by va00 on 10/05/2017.
 */
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("babel", function () {
    return gulp.src("src/app.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});
