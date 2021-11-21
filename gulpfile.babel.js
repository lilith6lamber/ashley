import gulp from 'gulp';

import bs_html from "./tasks/bs_html";
import html from "./tasks/html";
import modules from "./tasks/modules";
import style from "./tasks/style";
import rastr from "./tasks/rastr";
import webp from "./tasks/webp";
import favicon from "./tasks/favicon";
import watching from "./tasks/watch";


gulp.task('default',
    gulp.parallel(
        bs_html,
        html,
        modules,
        style,
        rastr,
        webp,
        favicon,
        watching
    ));

