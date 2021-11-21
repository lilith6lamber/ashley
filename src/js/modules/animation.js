"use strict";

import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateSections() {
    const sections = gsap.utils.toArray('.section');

    sections.pop();
    sections.forEach((el, i) => {
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger: el,
                start: "bottom bottom",
                pinSpacing: false,
                pin: true,
                scrub: true,
                onRefresh: () => gsap.set(el, {transformOrigin: "center " + (el.offsetHeight - window.innerHeight / 2) + "px"})
            }
        });

        tl.fromTo(el, 1, {y:0, rotate:0, scale:1, opacity:1}, {y:0, rotateX:0, scale:0.5, opacity:0.5}, 0)
            .to(el, 0.1, {opacity:0})

    });
}


