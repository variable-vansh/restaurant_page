// alert("webpack.config starts work from index.js, automatically builds up an HTML page with a template, builds up stuff in dist ");

// alert("now I made a change and did not run npx webpack in the terminal but cuz I have got npx webpack --watch, this will run by itself, hopefully")
import "../src/styles/headerStyle.css"
import { homePageFunction } from "../src/pages tab/home";
import { menuPageFunction } from "./pages tab/menu";
import { contactPageFunction } from "./pages tab/contact";

//site loads up home page by default
homePageFunction()

let content = document.querySelector("#content");

const homeButton = document.querySelectorAll('button:nth-child(1)')[0];
const menuButton = document.querySelectorAll('button:nth-child(2)')[0];
const contactButton = document.querySelectorAll('button:nth-child(3)')[0];

homeButton.onclick = function () {
    menuButton.classList.remove("activeTabButton")
    homeButton.classList.add("activeTabButton")
    contactButton.classList.remove("activeTabButton")

    homePageFunction();
};

menuButton.onclick = function () {
    //highlight active tab and normalize others
    menuButton.classList.add("activeTabButton")
    homeButton.classList.remove("activeTabButton")
    contactButton.classList.remove("activeTabButton")

    menuPageFunction();
    content.innerHTML = 'this is menu page';
};

contactButton.onclick = function () {
    menuButton.classList.remove("activeTabButton")
    homeButton.classList.remove("activeTabButton")
    contactButton.classList.add("activeTabButton")

    contactPageFunction();
    // content.innerHTML = 'this is contact page';
};


// import { homePage } from "../src/pages tab/home";
// import "./pages tab/menu"
// import "./pages tab/contact"

