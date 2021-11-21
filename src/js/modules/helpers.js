"use strict";

export function preventDefault() {
    const links = document.querySelectorAll('[href="#"]'),
        forms = document.querySelectorAll('form');

    links.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault();
        })
    })

    forms.forEach(el => {
        el.addEventListener('submit', e => {
            e.preventDefault();
        })
    })
}