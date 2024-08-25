import {slider1, slider2} from "./data.js";

const slider = document.querySelector(".slider");

const sliderContainer = document.createElement("div");
const sliderContainer2 = document.createElement("div");

sliderContainer.classList.add("slider-container");
sliderContainer2.classList.add("slider-container2")
let counter = 1;

slider1.forEach(item => {
    const sliderItem = document.createElement("div");
    sliderItem.classList.add("item", `item${counter}`);

    const pTag = document.createElement("p");
    const imgTag = document.createElement("img");
    pTag.textContent = item.text;
    imgTag.src = item.image;

    sliderItem.appendChild(pTag);
    sliderItem.appendChild(imgTag);
    sliderContainer.appendChild(sliderItem);

    counter++;
});

const clonedItems = sliderContainer.cloneNode(true);
Array.from(clonedItems.children).forEach(child => sliderContainer.appendChild(child));


slider2.forEach(item => {
    const sliderItem = document.createElement("div");
    sliderItem.classList.add("item", `item${counter}`);

    const pTag = document.createElement("p");
    const imgTag = document.createElement("img");
    pTag.textContent = item.text;
    imgTag.src = item.image;

    sliderItem.appendChild(pTag);
    sliderItem.appendChild(imgTag);
    sliderContainer2.appendChild(sliderItem);

    counter++;
});

const clonedItems2 = sliderContainer2.cloneNode(true);
Array.from(clonedItems2.children).forEach(child => sliderContainer2.appendChild(child));






slider.append(sliderContainer, sliderContainer2);

