import {imagesNav, menuBurgerData, navItems, network, searchData} from "../data/data.js";
import {handleOpenNavDesktop} from "./handleOpenNavDesktop.js";

export function handleNavOnScroll ({menu, nav, search, langContainer, logo })  {
    menu.remove();
    const menuBurger = document.createElement('div');
    const menuBurgerSubContainer = document.createElement('div');
    const menuText = document.createElement('p');
    const menuImage = document.createElement('img');
    const ulDropdown = document.createElement('ul');
    const containerSearchAndLang = document.createElement('div');
    const containerNetwork = document.createElement('div');
    const buttonSubscribe = document.createElement('button');
    const textButtonSubscribe = document.createElement('p');
    const imageButtonSubscribe = document.createElement('img');
    const containerContact = document.createElement('div');
    const containerSocialMedia = document.createElement('div');
    const youtube = document.createElement('img');
    const x = document.createElement('img');

    nav.append(menuBurger, ulDropdown);
    menuBurger.append(menuBurgerSubContainer);
    menuBurgerSubContainer.append(menuText, menuImage);
    navItems.forEach(navItem => {
        const liDropdown = document.createElement('li');
        const aDropdown = document.createElement('a');
        aDropdown.textContent = navItem;
        liDropdown.appendChild(aDropdown);
        ulDropdown.appendChild(liDropdown);
    });
    containerSearchAndLang.append(search, langContainer)
    ulDropdown.append(containerSearchAndLang, containerNetwork);
    containerNetwork.append(buttonSubscribe, containerContact);
    buttonSubscribe.append(textButtonSubscribe, imageButtonSubscribe);
    containerContact.append(youtube, x);


    menuText.textContent = menuBurgerData.open;
    menuImage.src = imagesNav.openMenu.pathOpen;
    menuImage.alt = imagesNav.openMenu.alt;
    logo.src = imagesNav.logo.pathDesktop;
    textButtonSubscribe.textContent = network.button.text;
    imageButtonSubscribe.src = network.arrow.path;
    imageButtonSubscribe.alt = network.arrow.alt;
    youtube.src = network.youtube.path;
    youtube.alt = network.youtube.alt;
    x.src = network.x.path;
    x.alt = network.x.alt;

    menuBurger.classList.add('menuBurger');
    logo.classList.add('logo');
    ulDropdown.classList.add('ulDropdown');
    containerSearchAndLang.classList.add('containerSearchAndLang');
    buttonSubscribe.classList.add('buttonSubscribe');
    containerNetwork.classList.add('containerNetwork');
    containerContact.classList.add('containerContact');
    containerSocialMedia.classList.add('containerSocialMedia');

    search.src = searchData.search.pathWhite;

    menuBurgerSubContainer.addEventListener('click', () => handleOpenNavDesktop({
        menuImage,
        menuText,
        ulDropdown
    }))
};
