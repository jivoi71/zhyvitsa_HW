let preprocessor = 'less';
const { src, dest, watch, series, parallel } = require('gulp'); // Gulp
let rename                                         = require("gulp-rename"); // Переименовывание файла
let browserSync                                    = require('browser-sync').create();
let autoprefixer                                   = require("gulp-autoprefixer");
let cache                                          = require("gulp-cache");
let cleanCSS                                       = require("gulp-clean-css");
let concat                                         = require("gulp-concat");
let imagemin                                       = require("gulp-imagemin");
let pngquant                                       = require('imagemin-pngquant');
let spritesmith                                    = require("gulp.spritesmith");
let uglify                                         = require("gulp-uglify");
let del                                            = require('del');
let less                                           = require('gulp-less');
let sass                                           = require('gulp-sass');

/*Less*/
	let from_preprocessor = () => {
		return src([
			    `./app/${preprocessor}/styles.${preprocessor}`,
			    `./app/${preprocessor}/media.${preprocessor}`
		    ])
		    .pipe(concat('main.css'))
		    .pipe(eval(preprocessor)())
		    .pipe(autoprefixer({
			    grid: true,
			    cascade: true
		    }))
		    .pipe(dest('./app/css'))
		    .pipe(browserSync.stream())
			.on('end', () => {
				console.log(`styles.${preprocessor} и media.${preprocessor} файлы объеденены и успешно сконвертированы в css-файлы и помещены в папку app/css/..`);
			});
	}
/*Less/ */

/*Less libs*/
	let from_preprocessor_libs = () => {
		return src(`./app/${preprocessor}/libs.${preprocessor}`)
			.pipe(eval(preprocessor)())
		    .pipe(autoprefixer({
		    	grid: true,
		    	cascade: true
		    }))
		    .pipe(dest('./app/css'))
		    .pipe(browserSync.stream())
			.on('end', () => {
				console.log(`libs.${preprocessor} успешно сконвертирован в css-файл и помещен в папку app/css/..`);
			})
	}
/*Less libs/ */

/*Browser Sync*/
	let browser_sync = done => {
		browserSync.init({
			server: {
				baseDir: "./app"
			},
			notify: false
		});
		console.log('Сервер запущен...')
		done();
	}
/*Browser Sync/ */

/*Scripts*/
	let scripts = () => {
		return src([
			    './app/libs/jquery/dist/jquery.js',
				'./app/libs/fancybox/dist/jquery.fancybox.js',
				'./app/libs/owl.carousel/dist/owl.carousel.js'			
		    ])
		    .pipe(concat('libs.min.js'))
		    .pipe(uglify())
		    .pipe(dest('./app/js'))
			.pipe(browserSync.stream())
		    .on('end', () => {
			    console.log('Скрипты минифицированы...');
		    });
	};
/*Scripts/ */

/*CSS libs*/
	let css_libs = () => {
		return src('./app/css/libs.css')
		    .pipe(cleanCSS({level: {1: {specialComments: 0}}}))
		    .pipe(rename({ suffix: ".min" }))
		    .pipe(dest('./app/css'))
			.on('end', () => {
				console.log('libs.css минифицирован...');
			});
	};
/*CSS libs/ */

/*Sprite*/
	let sprite = () => {
		let spriteData = src('./app/img/sprite/*.png').pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: 'sprite.css'
		}));
		
		return spriteData
			.pipe(dest('./app/img/sprite'))
			.on('end', () => {
				console.log('Спрайт создан...');
			});
	};
/*Sprite/ */

/*Image optimization*/
	let img = () => {
		return src([
			'./app/img/**/*.png',
			'./app/img/**/*.jpeg',
			'./app/img/**/*.jpg',
		])
			.pipe(cache(imagemin({
				interlaced : true,
				progressive: true,
				svgPlugins : [{ removeViewBox: false }],
				use        : [pngquant()]
			})))
			.pipe(dest('dist/img'))
			.on('end', () => {
				console.log('Изображения успешно оптимизированы...');
			});
	};
/*Image optimization/ */

/*Watch*/
	let watching = () => {
		watch(`./app/${preprocessor}/**/*.${preprocessor}`, from_preprocessor);
		watch(`./app/${preprocessor}/**/libs.${preprocessor}`, from_preprocessor_libs);
		watch('./app/*.html').on('change', browserSync.reload);
		watch([
			'./app/**/*.js',
			'!./app/**/*.min.js',
		]).on('change', browserSync.reload);
		console.log('Отслеживание файлов активировано...');
	};
/*Watch/ */

/*Destroy dist folder*/
	let clean = async done => {
		await del.sync('dist');
		console.log('Папка dist удалена..');
		done();
	};
/*Destroy dist folder/ */

/*Clear cache*/
	let clear = async () => await cache.clearAll() + console.log('КЕШ очищен...');
/*Clear cache/ */

/*Build*/
	let build = () => {
		return src([
			'./app/css/main.css',
			'./app/css/libs.min.css',
			'./app/fonts/**/*',
			'./app/js/**/*',
			'./app/*.html'
		], {base: 'app'})
			.pipe(dest('dist'))
			.on('end', () => {
				console.log('Проект создан. Теперь можно залить его на сервер...');
			});
	};
/*Build/ */

exports.browserSync  = browser_sync;
exports.watch        = watching;
exports.preprocessor = from_preprocessor;
exports.libs         = from_preprocessor_libs;
exports.cssLibs      = series(from_preprocessor, from_preprocessor_libs, css_libs);
exports.scripts      = scripts;
exports.clean        = clean;
exports.clear        = clear;
exports.sprite       = sprite;
exports.img          = img;
exports.build        = parallel(clean, img, from_preprocessor, from_preprocessor_libs, scripts, build);
exports.default      = parallel(css_libs, scripts, sprite, watching, browser_sync);