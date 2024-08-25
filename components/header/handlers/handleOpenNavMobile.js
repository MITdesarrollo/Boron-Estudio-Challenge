import {imagesNav, menuBurgerData} from "../data/data.js";

let isNavbarOpen = false;
export function setNavbarMobileOpen(value)  {
    isNavbarOpen = value;
}
export const handleOpenNavMobile = ({
                                  nav,
                                  ulDropdown,
                                  logo,
                                  menuImage,
                                  menuText
                              }) => {
    isNavbarOpen = !isNavbarOpen;
    nav.classList.toggle('backgroundBlack');
    ulDropdown.classList.toggle('ulActive');

    if (isNavbarOpen) {
        logo.src = imagesNav.logo.pathWhite;
        menuImage.src = imagesNav.openMenu.pathClose;
        menuText.textContent = menuBurgerData.close;
    }

    if (!isNavbarOpen) {
        logo.src = imagesNav.logo.pathBlack;
        menuImage.src = imagesNav.openMenu.pathOpen;
        menuText.textContent = menuBurgerData.open;
    }
}
