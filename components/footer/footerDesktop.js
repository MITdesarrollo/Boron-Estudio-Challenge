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

const footer = document.getElementById("footer")
export const creatDesktopFooter = () => {


    const containerGeneralFooter = document.createElement("div");

    const containerLeft = document.createElement("div");
    const containerRight = document.createElement("div");

    const logo = document.createElement("img");

    const containerLinks = document.createElement("div");
    const ulLeft = document.createElement("ul");
    const ulRight = document.createElement("ul");


    const containerNewsLetter = document.createElement("div");
    const paragraph = document.createElement("p");
    const btnAndEmail = document.createElement("div");
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


    footer.append(containerGeneralFooter,containerLegals);
    containerGeneralFooter.append(containerLeft, containerRight )
    containerLeft.append(logo, containerNewsLetter);
    containerRight.append(containerLinks);
    containerLinks.append(ulLeft, ulRight);

    containerNewsLetter.append(paragraph, btnAndEmail);
    btnAndEmail.append(btnNewsLetter, containerNetwork);

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


    footer.classList.add("footerDesktop");
    footer.classList.remove("footerMobile");
    containerGeneralFooter.classList.add("containerGeneralFooter");
    containerLeft.classList.add("containerLeft");
    containerRight.classList.add("containerRight");

    logo.classList.add("logo");
    containerLinks.classList.add("containerLinks");
    containerNewsLetter.classList.add("containerNewsLetter");
    paragraph.classList.add("paragraph");
    btnAndEmail.classList.add("btnAndEmail")
    btnNewsLetter.classList.add("btnNewsLetter");
    btnText.classList.add("btnText");
    containerNetwork.classList.add("containerNetwork");
    containerLegals.classList.add("containerLegals");
    byBoron.classList.add("byBoron")
    legal.classList.add("legal")
}
