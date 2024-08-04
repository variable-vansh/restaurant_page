import '../styles/homeStyle.css'

let homePage = document.querySelector("#content");

let title = document.createElement("div");
title.classList.add("title")
title.innerHTML = "Krita";
title.style.marginBottom = "10px";
homePage.appendChild(title);

let tagline = document.createElement("div");
tagline.classList.add("tagline")
tagline.innerHTML = "Taste the Tradition, Savor the Innovation";
homePage.appendChild(tagline);

export { homePage }