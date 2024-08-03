let homePage = document.querySelector("#content");
homePage.style.backgroundImage = "url('https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?w=900&t=st=1722720346~exp=1722720946~hmac=e56d68a66bb23bb74a81a10fb8d5f83d8cd820ca4b9699306e4130954c6af376')";
homePage.style.backgroundSize = "cover";
homePage.style.height = "90vh"
homePage.style.width = "100vw"
homePage.style.display = "flex";
homePage.style.justifyContent = "center";
homePage.style.alignItems = "center";
homePage.style.flexDirection = "column";

let title = document.createElement("div");
title.innerHTML = "Krita";
title.style.marginBottom = "10px";
homePage.appendChild(title);

let tagline = document.createElement("div");
tagline.innerHTML = "Taste the Tradition, Savor the Innovation";
homePage.appendChild(tagline);

export { homePage }