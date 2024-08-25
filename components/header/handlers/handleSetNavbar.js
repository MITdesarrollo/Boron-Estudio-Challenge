import {createMobileNav} from "../headerMobile.js";
import {setNavbarMobileOpen} from "./handleOpenNavMobile.js";
import {createDesktopNav} from "../headerDesktop.js";

const nav = document.querySelector("#nav");

export const handleSetNavbar = () => {
    if (window.innerWidth < 992) {
        const isMobileNavCreated = document.querySelector('.navMobile');

        if(!isMobileNavCreated) {
            nav.innerHTML = null;
            createMobileNav();
        }
    }

    if (window.innerWidth >= 992) {
        setNavbarMobileOpen(false);
        const isDesktopNavCreated = document.querySelector('.navDesktop');

        if(!isDesktopNavCreated) {
            nav.innerHTML = null;
            createDesktopNav();
        }
    }
}
