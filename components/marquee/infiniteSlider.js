export const createSlider = ({
    sliderContainer,
    className,
    data,
    containerClassName
                      }) => {
    const slider = document.querySelector(`#${containerClassName}`);


    sliderContainer.classList.add(className);

    let counter = 1;

    data.forEach(item => {
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

    slider.append(sliderContainer);
}




