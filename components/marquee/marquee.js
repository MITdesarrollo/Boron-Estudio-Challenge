import {createSlider} from "./infiniteSlider.js";
import {slider1, slider2, slider3} from "./data.js";

const sliderContainer = document.createElement("div");
const sliderContainer2 = document.createElement("div");
const sliderContainer3 = document.createElement('div');

createSlider({
    sliderContainer: sliderContainer,
    className: 'slider-container',
    data: slider1,
    containerClassName: 'slider'
});

createSlider({
    sliderContainer: sliderContainer2,
    className: 'slider-container2',
    data: slider2,
    containerClassName: 'slider2'
});

createSlider({
    sliderContainer: sliderContainer3,
    className: 'slider-container3',
    data: slider3,
    containerClassName: 'slider3'
});
