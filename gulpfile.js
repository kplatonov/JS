const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

// gulp's dependens are here
gulp.task('default', async function() {
    //run ESLint
    gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format());
    //src for Node
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
    //src for browser
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});

