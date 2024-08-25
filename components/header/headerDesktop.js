import {imagesNav, langData, navItems, searchData} from "./data/data.js";
import {handleSelectEN, handleSelectES} from "./handlers/handleChangeLang.js";
import {handleNavOnScroll} from "./handlers/handleNavOnScroll.js";

const nav = document.getElementById('nav');
export const createDesktopNav = () => {
    const logo = document.createElement('img');
    const menu = document.createElement('div');
    const menuUl = document.createElement('ul');
    const langContainer = document.createElement('div');
    const en = document.createElement('p');
    const slash = document.createElement('span');
    const es = document.createElement('p');
    const search = document.createElement('img');

    nav.append(logo, menu);
    menu.append(menuUl);
    navItems.forEach(navItem => {
        const liDropdown = document.createElement('li');
        const aDropdown = document.createElement('a');
        aDropdown.textContent = navItem;
        liDropdown.appendChild(aDropdown);
        menuUl.appendChild(liDropdown);
    });
    menuUl.append(langContainer, search);
    langContainer.append(en, slash, es);

    logo.src = imagesNav.logo.pathBlack;
    logo.alt = imagesNav.logo.alt;
    en.textContent = langData.en;
    slash.textContent = langData.slash;
    es.textContent = langData.es;
    search.src = searchData.search.pathBlack;
    search.alt = searchData.search.alt;

    nav.classList.add('navDesktop');
    nav.classList.remove('navMobile');
    nav.classList.remove('backgroundBlack');
    menu.classList.add('menu');
    langContainer.classList.add('langContainer');
    es.classList.add('langActive');

    en.addEventListener('click', () => handleSelectEN({
        en,
        es
    }));

    es.addEventListener('click', () => handleSelectES({
        es,
        en
    }));

    const scrollHandler = () => {
        const menuBurgerExist = document.querySelector('.menuBurger');

        if(!menuBurgerExist) {
            handleNavOnScroll({
                search,
                nav,
                menu,
                logo,
                langContainer
            })
        }

        window.removeEventListener('scroll', scrollHandler);
    };

    window.addEventListener('scroll', scrollHandler);
}


