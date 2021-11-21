import {src, dest} from 'gulp';
import webpConv from 'gulp-webp';
import changed from 'gulp-changed';
import plumber from 'gulp-plumber';

function webp() {
	return src('build/img/**/*.+(png|jpg|jpeg)')
		.pipe(plumber())
		.pipe(changed('build/img', {
			extension: '.webp'
		}))
		.pipe(webpConv({
			lossless: true,
			quality: 100
		}))
		.pipe(dest('build/img'))
}

export default webp;