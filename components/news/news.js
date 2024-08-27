import {cardData, titleGeneralNews} from "./data/data.js"

const newsContainer = document.querySelector('.newsContainer');
const cardsContainer = document.createElement("div");

const titleNews = document.createElement("h2");

titleNews.textContent = titleGeneralNews;
cardData.forEach(data => {
    const card = document.createElement('div');
    card.classList.add("card");

    const image = document.createElement('img');
    image.classList.add("cardImage");
    image.src = data.image;
    image.alt = data.title;

    const content = document.createElement('div');
    content.classList.add("cardContent");

    const containerPretitle = document.createElement("div")
    const preTitle = document.createElement('h3')
    const icon = document.createElement('p');

    containerPretitle.classList.add("containerPreTitle");
    preTitle.classList.add("preTitle");
    icon.classList.add("cardIcon");
    preTitle.textContent = "WEBINAR"
    icon.textContent = '+';

    const title = document.createElement('h2');
    title.classList.add("cardTitle");
    title.textContent = data.title;

    content.append(containerPretitle, title);
    containerPretitle.append(preTitle, icon);
    card.append(image,content);


    cardsContainer.append(card);
});

cardsContainer.classList.add("cardsContainer");
titleNews.classList.add("titleNews");
newsContainer.append(titleNews,cardsContainer);

