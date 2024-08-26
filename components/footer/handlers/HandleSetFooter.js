


import {creatMobileFooter} from "../footerMobile.js";
import {creatDesktopFooter} from "../footerDesktop.js";

const footer = document.querySelector("#footer");

export const handleSetFooter = () => {
    if (window.innerWidth < 992) {
        const isMobileFooter = document.querySelector('.footerMobile');

        if(!isMobileFooter) {
            footer.innerHTML = null;
            creatMobileFooter();
        }
    }

    if (window.innerWidth >= 992) {
        const isDesktopFooter = document.querySelector('.footerDesktop');

        if(!isDesktopFooter) {
            footer.innerHTML = null;
            creatDesktopFooter();
        }
    }
}
