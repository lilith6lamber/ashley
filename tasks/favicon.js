import { src, dest } from 'gulp';

function copyFavicon() {
    return src('src/favicon/**.*')
        .pipe(dest('build/favicon'))
}

export default copyFavicon;