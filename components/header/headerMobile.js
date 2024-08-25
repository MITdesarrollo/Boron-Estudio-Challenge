import {imagesNav, langData, menuBurgerData, navItems, network, searchData} from "./data/data.js";
import {handleOpenNavMobile} from "./handlers/handleOpenNavMobile.js";
import {handleSelectEN, handleSelectES} from "./handlers/handleChangeLang.js";

export const createMobileNav = () => {
    const nav = document.getElementById('nav');

    const logo = document.createElement('img');
    const menuBurger = document.createElement('div');
    const menuBurgerSubContainer = document.createElement('div');
    const menuText = document.createElement('p');
    const menuImage = document.createElement('img');
    const ulDropdown = document.createElement('ul');
    const containerSearchAndLang = document.createElement('div');
    const langContainer = document.createElement('div');
    const en = document.createElement('p');
    const slash = document.createElement('span');
    const es = document.createElement('p');
    const search = document.createElement('img');
    const containerNetwork = document.createElement('div');
    const buttonSubscribe = document.createElement('button');
    const textButtonSubscribe = document.createElement('p');
    const imageButtonSubscribe = document.createElement('img');
    const containerContact = document.createElement('div');
    const emailContact = document.createElement('p');
    const containerSocialMedia = document.createElement('div');
    const youtube = document.createElement('img');
    const x = document.createElement('img');

    nav.append(logo, menuBurger, ulDropdown);
    menuBurgerSubContainer.append(menuText, menuImage);
    menuBurger.append(menuBurgerSubContainer);
    navItems.forEach(navItem => {
        const liDropdown = document.createElement('li');
        const aDropdown = document.createElement('a');
        aDropdown.textContent = navItem;
        liDropdown.appendChild(aDropdown);
        ulDropdown.appendChild(liDropdown);
    });
    ulDropdown.append(containerSearchAndLang, containerNetwork);
    containerSearchAndLang.append(search, langContainer);
    langContainer.append(en, slash, es);
    containerNetwork.append(buttonSubscribe, containerContact);
    buttonSubscribe.append(textButtonSubscribe, imageButtonSubscribe);
    containerContact.append(emailContact, containerSocialMedia);
    containerSocialMedia.append(youtube, x);

    menuText.textContent = menuBurgerData.open;
    menuImage.src = imagesNav.openMenu.pathOpen;
    menuImage.alt = imagesNav.openMenu.alt;
    logo.src = imagesNav.logo.pathBlack;
    logo.alt = imagesNav.logo.alt;
    en.textContent = langData.en;
    slash.textContent = langData.slash;
    es.textContent = langData.es;
    search.src = searchData.search.pathWhite;
    search.alt = searchData.search.alt;
    textButtonSubscribe.textContent = network.button.text;
    imageButtonSubscribe.src = network.arrow.path;
    imageButtonSubscribe.alt = network.arrow.alt;
    emailContact.textContent = network.emailContact.text;
    youtube.src = network.youtube.path;
    youtube.alt = network.youtube.alt;
    x.src = network.x.path;
    x.alt = network.x.alt;

    nav.classList.add('navMobile');
    nav.classList.remove('navDesktop');
    menuBurger.classList.add('menuBurger');
    logo.classList.add('logoMobile');
    es.classList.add('langActive');
    langContainer.classList.add('langContainer');
    buttonSubscribe.classList.add('buttonSubscribe');
    containerNetwork.classList.add('containerNetwork');
    containerContact.classList.add('containerContact');
    containerSocialMedia.classList.add('containerSocialMedia');

    menuBurger.addEventListener('click', () => handleOpenNavMobile({
        logo,
        menuImage,
        nav,
        ulDropdown,
        menuText
    }));

    en.addEventListener('click', () => handleSelectEN({
        en,
        es
    }));

    es.addEventListener('click', () => handleSelectES({
        es,
        en
    }));
}



