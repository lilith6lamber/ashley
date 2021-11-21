"use strict";

import {preventDefault} from "./modules/helpers";
import {animateSections} from "./modules/animation";

document.addEventListener('DOMContentLoaded', () => {
    preventDefault();
    animateSections();
})