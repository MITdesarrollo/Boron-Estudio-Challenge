import {
    btnArrowImg,
    emailBoron,
    linksLeft,
    linksRight,
    logoWhite, textBoron,
    textBtn, textLegal,
    textNews,
    twitterImg,
    youtubeImg
} from "./data/data.js";

const footer = document.getElementById("footer");
export const creatMobileFooter = () => {
    const containerGeneralFooter = document.createElement("div");
    const logo = document.createElement("img");

    const containerLinks = document.createElement("div");
    const ulLeft = document.createElement("ul");
    const ulRight = document.createElement("ul");


    const containerNewsLetter = document.createElement("div");
    const paragraph = document.createElement("p");
    const btnNewsLetter = document.createElement("button");
    const btnText = document.createElement("p");
    const btnArrow= document.createElement("img");

    const containerNetwork = document.createElement("div");
    const email = document.createElement("p");
    const youtube = document.createElement("img");
    const twitter = document.createElement("img");

    const containerLegals = document.createElement("div");
    const byBoron = document.createElement("p");
    const legal = document.createElement("p");

    linksLeft.forEach(links => {
        const li = document.createElement('li');
        li.textContent = links;
       //const a = document.createElement('a');
        ulLeft.appendChild(li);
    });
    linksRight.forEach(links => {
        const li = document.createElement('li');
        li.textContent = links;
        //const a = document.createElement('a');
        ulRight.appendChild(li);
    });


    footer.append(containerGeneralFooter);
    containerGeneralFooter.append(logo, containerLinks,  containerNewsLetter, containerNetwork, containerLegals)
    containerLinks.append(ulLeft, ulRight);
    containerNewsLetter.append(paragraph, btnNewsLetter);
    btnNewsLetter.append(btnText, btnArrow);

    containerNetwork.append(email, youtube, twitter);

    containerLegals.append(byBoron, legal);


    logo.src = logoWhite;
    btnArrow.src = btnArrowImg;
    youtube.src = youtubeImg;
    twitter.src = twitterImg;

    paragraph.textContent = textNews;
    btnText.textContent = textBtn;
    email.textContent = emailBoron;
    byBoron.textContent = textBoron;
    legal.textContent = textLegal;


    footer.classList.add("footerMobile");
    footer.classList.remove("footerDesktop");
    containerGeneralFooter.classList.add("containerGeneralFooter");
    logo.classList.add("logo");
    containerLinks.classList.add("containerLinks");

    containerNewsLetter.classList.add("containerNewsLetter");
    paragraph.classList.add("paragraph")
    btnNewsLetter.classList.add("btnNewsLetter");
    btnText.classList.add("btnText");
    containerNetwork.classList.add("containerNetwork");
    containerLegals.classList.add("containerLegals");
    byBoron.classList.add("byBoron")
    legal.classList.add("legal")
}
