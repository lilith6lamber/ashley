import { src, dest } from 'gulp';
import changed from 'gulp-changed';
import plumber from 'gulp-plumber';
import imagemin from 'gulp-image';
import browserSync from 'browser-sync';

function rastr() {
	return src('src/img/**/*.+(png|jpg|jpeg|gif|svg|ico)')
		.pipe(plumber())
		.pipe(changed('build/img'))
		.pipe(imagemin({
			pngquant: ['--speed=1', '--force', 256],
			jpegRecompress: ['--strip', '--quality', 'medium', '--min', 80, '--max', 100],
			mozjpeg: ['-optimize', '-progressive'],
			gifsicle: ['--optimize'],
			svgo: ['--enable', 'cleanupIDs'],
			concurrent: 10,
			quiet: true
			} ), )
		.pipe(dest('build/img'))
		.pipe(browserSync.stream())
}

export default rastr;