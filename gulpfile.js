const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

//compile scss into css
const style = () => {
    //1. where is the scss file?
    return gulp.src("./scss/**/*.scss")
    //2. pass file through sass compiler
        .pipe(sass())
    //3. where do we save compiled file?
        .pipe(gulp.dest("./dist/css"))
    //4. stream changes to all browsers
        .pipe(browserSync.stream());
}

const watch = () => {
    //initialize server
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
    //watch for changes
    gulp.watch("./scss/**/*.scss", style);
    gulp.watch("./dist/*.html").on("change", browserSync.reload);
    gulp.watch("./js/**/*.js").on("change", browserSync.reload);
    
}

exports.style = style;
exports.watch = watch;