// ------------------------> Imports <----------------------
// import Footer from "./components/footer.js";
import Navbar from "./components/navbar.js";
// ===============================================================
// ------------------------> Navbar <----------------------
let navContainer = document.getElementById("navbarMen");
let navbar = new Navbar();
navbar.Nav(navContainer);

// ------------------------> Footer <----------------------

// let footerContainer = document.getElementById("footer");
// let footer = new Footer();
// footer.Footer(footerContainer);
import {footerHtml} from "./components/compoents.js";
document.getElementById("footer").innerHTML = footerHtml()

