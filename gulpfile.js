/**
 * Created by va00 on 10/05/2017.
 */
var gulp = require("gulp");
var babel = require("gulp-babel");
var babili = require("gulp-babili");

gulp.task("babel", function () {
    return gulp.src("src/app.js")
        .pipe(babel())
        .pipe(babili({
            mangle: {
                keepClassNames: true
            }
        }))
        .pipe(gulp.dest("dist"));
});
