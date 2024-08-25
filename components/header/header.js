import {createMobileNav} from "./headerMobile.js";
import {createDesktopNav} from "./headerDesktop.js";
import {handleSetNavbar} from "./handlers/handleSetNavbar.js";


if (window.innerWidth < 992) {
    createMobileNav();
}

if (window.innerWidth >= 992) {
    createDesktopNav();
}

window.addEventListener('resize', handleSetNavbar)
