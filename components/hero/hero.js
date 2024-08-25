import {content, svgPaths, title} from "./data.js";
import {description, hero, titlePrincipal} from "./domElements.js";

let nextSvgIndex = 0;
let div = null;
content.paragraph.forEach(({ text, type }) => {
    const span = document.createElement("span");
    span.textContent = text;

    switch(type) {
        case "bg":
        case "svg":
            if (!div) {
                div = document.createElement("div");
                description.appendChild(div);
            }
            span.classList.add(type + '-class');
            div.appendChild(span);

            if (type === "svg") {
                const img = document.createElement("img");
                img.src = svgPaths[nextSvgIndex++];
                span.appendChild(img);
            }
            break;
        default:
            div = null;
            description.appendChild(span);
            break;
    }
});

titlePrincipal.textContent = title;

hero.append(titlePrincipal, description);


titlePrincipal.classList.add('title');
description.classList.add('description');
