// Required Node Packages
var gulp = require("gulp");
// Needed to build SASS files
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
// Javascript object made to remember file paths
var paths = {
  styles: {
    src: "css/*.css",
    dest: "css/",
  },
  js: {
    src: "js/*.js",
    dest: "js/",
  },
};
// Task to be performed when gulp.js is called
function style() {
  return (
    gulp
      // File path to SCSS source
      .src("css/*.css")
      // Passes returned files back to SASS build method
      .pipe(sass())
      // Checks for an error with passing the files
      .on("error", sass.logError)
      //Postcss used to parse CSS, Autoprefixer will remove vendor
      // Specific requirements and CSSnano minifies the css files into a production worthy verison
      .pipe(postcss([autoprefixer(), cssnano]))
      // Concatenates all SCSS files together in to one file
      .pipe(concat("production.css"))
      // Stores the generated CSS file to specified destination
      .pipe(gulp.dest(paths.styles.dest))
  );
}
// Function to update if changes are made within selected file path,
// two arguments the file to watch as the fucntion to be perforemd if changes are made
function watch() {
  gulp.watch(paths.styles.src, style);
}
// Compresses Javascripts file for production version
function javascript() {
  return gulp
    .src(paths.js.src)
    .pipe(uglify())
    .pipe(concat("production.js"))
    .pipe(gulp.dest(paths.js.dest));
}
console.log("Compression Completed");
// Performs multiple functiona automatically when gulp.js is ran
exports.default = gulp.series(style, javascript);
