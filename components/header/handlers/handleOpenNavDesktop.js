import {imagesNav, menuBurgerData} from "../data/data.js";

export let isNavbarOpen = false;
export const handleOpenNavDesktop = ({
                                        ulDropdown,
                                        menuImage,
                                        menuText
                                    }) => {
    isNavbarOpen = !isNavbarOpen;
    ulDropdown.classList.toggle('ulActive');

    if (isNavbarOpen) {
        menuImage.src = imagesNav.openMenu.pathClose;
        menuText.textContent = menuBurgerData.close;
    }

    if (!isNavbarOpen) {
        menuImage.src = imagesNav.openMenu.pathOpen;
        menuText.textContent = menuBurgerData.open;
    }
}
