import {
  watch,
  parallel,
  series
} from 'gulp';

import html from "./html";
import modules from "./modules";
import style from "./style";
import rastr from "./rastr";
import webp from "./webp";
import copyFavicon from "./favicon";

function watching() {
  watch('src/**/*.html', series(html));
  watch('src/favicon/**.*', series(copyFavicon));
  watch('src/**/*.scss', parallel(style));
  watch('src/**/*.js', parallel(modules));
  watch('src/img/**/*.+(png|jpg|jpeg|gif)', series(rastr, webp));
}

export default watching;