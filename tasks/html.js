import {src, dest} from 'gulp';
import include from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import browserSync from 'browser-sync';

function html() {
	return src(['src/**/*.html', '!src/components/**/*.html'])
		.pipe(include())
		.pipe(htmlmin({
			caseSensitive: true,
			removeAttributeQuotes: true,
			removeComments: true,
			removeEmptyAttributes: true,
			collapseWhitespace: true,
		}))
		.pipe(dest('build'))
		.pipe(browserSync.stream())
}

export default html;