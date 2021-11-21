import { src, dest } from 'gulp';
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)
import bulk from 'gulp-sass-bulk-importer';
import prefixer from 'gulp-autoprefixer';
import clean from 'gulp-clean-css';
import map from 'gulp-sourcemaps';
import browserSync from 'browser-sync';

function style() {
	return src(['src/scss/*.scss', 'src/scss/pages/*.scss', '!src/scss/**/.*'])
		.pipe(map.init())
		.pipe(bulk())
		.pipe(sass({
			includePaths: ['node_modules'],
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(prefixer({
			overrideBrowserslist: ['last 8 versions'],
			browsers: [
				'Android >= 4',
				'Chrome >= 20',
				'Firefox >= 24',
				'Explorer >= 11',
				'iOS >= 6',
				'Opera >= 12',
				'Safari >= 6',
			],
		}))
		.pipe(clean({
			level: 2
		}))
		.pipe(map.write('../sourcemaps/'))
		.pipe(dest('build/css/'))
		.pipe(browserSync.stream())
}

export default style;