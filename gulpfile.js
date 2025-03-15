const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin'); // Minificar imagenes
// import imagemin from 'gulp-imagemin'; 
const notify = require('gulp-notify');
const cache = require('gulp-cache');
const clean = require('gulp-clean');
// const webp = require('gulp-webp');
const { renderSync } = require('sass');

const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    imagenes: 'src/img/**/*'
}

function css() {
    return src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        // .pipe(postcss([autoprefixer(), cssnano()]))
        // .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/css'));
}

function javascript() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./build/js'))
}

// function imagenes() {
//     return src(paths.imagenes)
//         .pipe(cache(imagemin({ optimizationLevel: 3 })))
//         .pipe(dest('build/img'))
        // .pipe(notify('Imagen Completada' ));
// }

// function versionWebp() {
//     return src(paths.imagenes)
//         .pipe(webp())
//         .pipe(dest('build/img'))
//         // .pipe(notify({ message: 'Imagen Completada' }));
// }

function aosCss() {
    return src('node_modules/aos/dist/aos.css')
        .pipe(dest('build/css'));
}

function aosJs() {
    return src('node_modules/aos/dist/aos.js')
        .pipe(dest('build/js'));
}


function watchArchivos() {
    watch(paths.scss, css);
    watch(paths.js, javascript);
    // watch(paths.imagenes, imagenes);
    // watch(paths.imagenes, versionWebp);
}

exports.css = css;
exports.watchArchivos = watchArchivos;
exports.default = parallel(aosCss, aosJs, css, javascript, watchArchivos); 