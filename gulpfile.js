const gulp = require('gulp');

const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

const del = require('del');

const browserSync = require('browser-sync').create();

const paths = {
    root: './build',
    template: {
        src: 'src/template/**/*.html'
    },
    styles: {
        src: 'src/styles/**/*.*',
        dest: 'build/assets/styles/'
    },    
    images: {
        src: 'src/img/**/*.*',
        dest: 'build/assets/images/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'build/assets/scripts/'
    },
    php: {
        src: 'src/php/**/*.php',
        dest: 'build/assets/php/'
    },
    font: {
        src: 'src/fonts/**/*.*',
        dest: 'build/assets/fonts'
    },    
    docs: {
        src: 'src/docs/**/*.*',
        dest: 'build/assets/docs/'
    }
}

//перенос html кода в build
function template() {
    return gulp.src(paths.template.src)
        .pipe(gulp.dest(paths.root));
}

// scss
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass())
        .pipe(gulp.dest(paths.styles.dest))
}

function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(gulp.dest(paths.scripts.dest));
}

function php() {
    return gulp.src(paths.php.src)
        .pipe(gulp.dest(paths.php.dest));
}

//font
function font() {
    return gulp.src(paths.font.src)
        .pipe(gulp.dest(paths.font.dest));
}

// clear
function clean() {
    return del(paths.root);
}

// галповский вотчер
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.template.src, template);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.docs.src, docs);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.php.src, php);
    gulp.watch(paths.font.src, font);
}

// локальный сервер + livereload (встроенный)
function server() {
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}

// просто переносим картинки
function images() {
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest));
}

// переносим документы
function docs() {
    return gulp.src(paths.docs.src)
        .pipe(gulp.dest(paths.docs.dest));
}

exports.template = template;
exports.styles = styles;
exports.clean = clean;
exports.images = images;
exports.font = font;
exports.php = php;
exports.docs = docs;

gulp.task('default', gulp.series(
    clean,
    gulp.parallel(styles, template, images, scripts, font, php, docs),
    gulp.parallel(watch, server)
));