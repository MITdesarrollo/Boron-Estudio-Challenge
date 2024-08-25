import {navItems, imagesNav, searchData, lang, network} from "./data.js";
import {
    arrow,
    buttonNewsLetter,
    containerBtnNewsletter,
    containerButtonMenu,
    containerLangSearch,
    containerLangSearchNoScroll,
    containerMenu,
    containerNetwork,
    containerSocialMedia,
    email,
    language,
    languageNoScroll,
    logo,
    menu,
    nav,
    newsletter,
    openMenu,
    search,
    searchNoScroll,
    ulNoScroll,
    x,
    youtube
} from "./domElements.js";

let isNavOpen = false;
let isScrolled = false;


//img
logo.src = window.innerWidth < 992 ? imagesNav.logo.pathW : isScrolled ?  imagesNav.logo.pathDesktop : imagesNav.logo.pathB;
logo.alt = imagesNav.logo.alt;
openMenu.src = imagesNav.openMenu.pathOpen;
openMenu.alt = imagesNav.openMenu.alt;

search.src = window.innerWidth < 992 ? searchData.search.pathW : isNavOpen ? searchData.search.pathW : searchData.search.pathB;
search.alt = searchData.search.alt;
searchNoScroll.src = searchData.search.pathB;
searchNoScroll.alt = searchData.search.alt;
arrow.src = network.arrow.path;
arrow.alt = network.arrow.alt;
x.src = network.x.path;
x.alt = network.x.alt;
youtube.src = network.youtube.path;
youtube.alt = network.youtube.alt;

//content
menu.textContent = "Menu";

language.textContent = lang;
languageNoScroll.textContent = lang;
newsletter.textContent = "SUSCRIBITE A NUESTRO NEWSLETTER"
email.textContent = "info@boronstudio.com";

const ul = document.getElementById('ul');
navItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});

const createDesktopNavbar = () => {
    if(window.innerWidth >= 992) {
        nav.append(ulNoScroll)

        navItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ulNoScroll.append(li);
        });

        ulNoScroll.append(containerLangSearchNoScroll);
    }

}

//fathers

nav.append(logo, containerMenu, ul);
ul.append(containerLangSearch, containerBtnNewsletter);
ulNoScroll.append(containerLangSearchNoScroll);
containerLangSearchNoScroll.append(languageNoScroll,searchNoScroll)
containerLangSearch.append(search, language);
containerMenu.append(containerButtonMenu);
containerButtonMenu.append(menu, openMenu);
containerBtnNewsletter.append(buttonNewsLetter, containerNetwork);
buttonNewsLetter.append(newsletter, arrow);
containerNetwork.append(email, containerSocialMedia);
containerSocialMedia.append(youtube, x);

createDesktopNavbar()


//class
logo.classList.add("logo");
ul.classList.add("ul");
ulNoScroll.classList.add("ulNoScroll");
containerMenu.classList.add("containerMenu");
containerButtonMenu.classList.add("containerButtonMenu")
menu.classList.add("menu");
openMenu.classList.add("openMenu");
containerLangSearch.classList.add("containerLangSearch")
containerLangSearchNoScroll.classList.add("containerLangSearchNoScroll")
search.classList.add("search");
containerBtnNewsletter.classList.add("containerBtnNewsletter");
buttonNewsLetter.classList.add("buttonNewsLetter");
newsletter.classList.add("newsletter")
containerNetwork.classList.add("containerNetwork");
email.classList.add("email");
x.classList.add("x");
youtube.classList.add("youtube");
containerSocialMedia.classList.add("containerSocialMedia");
window.innerWidth >= 992 && containerMenu.classList.add('containerMenuHide');
// (window.innerWidth >=992 && isScrolled) && logo.classList.add('logoOnlyB');

const handleNavBarMobile = () => {
    if (!isNavOpen) {
        isNavOpen = true;
        ul.classList.add("navActive");
        logo.src = imagesNav.logo.pathB;
        nav.classList.add("headerBlack");
        nav.classList.remove("headerWhite");
        menu.textContent = "Cerrar";
        openMenu.src = imagesNav.openMenu.pathClose;
    } else {
        isNavOpen = false;
        logo.src = imagesNav.logo.pathW;
        ul.classList.remove("navActive");
        nav.classList.add("headerWhite");
        nav.classList.remove("headerBlack");
        menu.textContent = "Menu";
        openMenu.src = imagesNav.openMenu.pathOpen;
    }
}

const handleNavBarDesktop = () => {
    if (!isNavOpen) {
        isNavOpen = true;
        ul.classList.add("navActive");
        logo.src = imagesNav.logo.pathDesktop;
        menu.textContent = "Cerrar";
        openMenu.src = imagesNav.openMenu.pathClose;
        search.src = searchData.search.pathW;

    } else {

        isNavOpen = false;
        ul.classList.remove("navActive");
        menu.textContent = "Menu";
        openMenu.src = imagesNav.openMenu.pathOpen;
    }
}


containerMenu.addEventListener("click", () => {
    if (window.innerWidth >= 992) {
        handleNavBarDesktop()
    } else {
        handleNavBarMobile()
    }
})

const changeLogoNavOnResize = () => {
    if (window.innerWidth < 992 && isNavOpen) {
        logo.src = imagesNav.logo.pathB;
    } else if (window.innerWidth < 992) {
        logo.src = imagesNav.logo.pathW;
    } else {
        logo.src = isScrolled ? imagesNav.logo.pathDesktop : imagesNav.logo.pathB ;
    }
}

const changeBgOnResize = () => {
    if(window.innerWidth >= 992) {
        nav.classList.remove('headerBlack');
    } else   if (window.innerWidth <= 992 && isNavOpen) {
        nav.classList.add('headerBlack')
    }
}

window.addEventListener("resize", () => {
    changeLogoNavOnResize();
    changeBgOnResize();
    !isScrolled && nav.append(ulNoScroll);
    (window.innerWidth >= 992 && !isScrolled) ? containerMenu.classList.add('containerMenuHide') : containerMenu.classList.remove('containerMenuHide');
    window.innerWidth < 992 ? ulNoScroll.classList.add('containerMenuHide') : ulNoScroll.classList.remove('containerMenuHide');
});

const handleScroll = () => {
    isScrolled = true;
    nav.removeChild(ulNoScroll);
    containerMenu.classList.remove('containerMenuHide');
}

window.addEventListener('scroll', handleScroll);

