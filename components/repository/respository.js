import {imgArrow, linksAndImagesRepository,  repositoryTitle, subtitle} from "./data/data.js";


const repository = document.getElementById("repository");

const containerGeneralRepository = document.createElement("div");

const containerDescriptionRepository = document.createElement("div");
const titleRepository = document.createElement("h2");
const subtitleRepository = document.createElement("h3");
const ulElement = document.createElement("ul");

titleRepository.textContent = repositoryTitle;
    subtitleRepository.textContent= subtitle;
linksAndImagesRepository.forEach(item => {
    const liElement = document.createElement("li");
    liElement.textContent = item.link;

    const divElement = document.createElement("div");
    divElement.classList.add("containerImg");

    const imgElement = document.createElement("img");
    imgElement.src = imgArrow;
    imgElement.classList.add("imgElement");

    const hoverImgElement = document.createElement("img");
    hoverImgElement.src = item.image;
    hoverImgElement.classList.add("hoverImgElement");

    const {  left } = getRandomPosition();
    hoverImgElement.style.left = `${left}%`;

    divElement.appendChild(imgElement);
    liElement.appendChild(divElement);
    liElement.appendChild(hoverImgElement);

    ulElement.classList.add("ulElement");
    liElement.classList.add("liElement");

    ulElement.appendChild(liElement);
});

function getRandomPosition() {
    const left = Math.random() * 60;
    return {  left };
}

repository.append(containerGeneralRepository);
containerGeneralRepository.append(containerDescriptionRepository, ulElement);
containerDescriptionRepository.append(titleRepository,subtitleRepository)

containerGeneralRepository.classList.add("containerGeneralRepository");
containerDescriptionRepository.classList.add("containerDescriptionRepository");
titleRepository.classList.add("titleRepository");
subtitleRepository.classList.add("subtitleRepository");



