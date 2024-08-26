

import {creatMobileFooter} from "./footerMobile.js";
import {handleSetFooter} from "./handlers/HandleSetFooter.js";
import {creatDesktopFooter} from "./footerDesktop.js";


if (window.innerWidth < 992) {
    creatMobileFooter();
}

if (window.innerWidth >= 992) {
    creatDesktopFooter();
}
window.addEventListener('resize', handleSetFooter)

