import {descriptionText, img, preTitleText} from "./data/data.js";

const approach = document.querySelector(".approach");

const containerGeneral = document.createElement("div");
const containerText = document.createElement("div");
const preTitle = document.createElement("h3");
const description = document.createElement("p");

const containerImage = document.createElement("div");
const image = document.createElement("img");

preTitle.textContent = preTitleText;
description.textContent = descriptionText;

image.src = img;

approach.append(containerGeneral);
containerGeneral.append(containerText, containerImage);
containerText.append(preTitle, description);
containerImage.append(image);

containerGeneral.classList.add("containerGeneral");
containerText.classList.add("containerText");
preTitle.classList.add("preTitle");
description.classList.add("descriptionText");

containerImage.classList.add("containerImage");
