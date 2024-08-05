import '../styles/homeStyle.css'

function homePageFunction() {
    let homePage = document.querySelector("#content");

    //clear older stuff
    homePage.innerHTML = "";

    //the problem here is, the background image iset for the home page is being engraved in to content element, so I'll create a layer of home page
    homePage.style.backgroundImage = "url('https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg?w=900&t=st=1722720346~exp=1722720946~hmac=e56d68a66bb23bb74a81a10fb8d5f83d8cd820ca4b9699306e4130954c6af376')"
    let title = document.createElement("div");
    title.classList.add("title")
    title.innerHTML = "Krita";
    title.style.marginBottom = "10px";
    homePage.appendChild(title);

    let tagline = document.createElement("div");
    tagline.classList.add("tagline")
    tagline.innerHTML = "Taste the Tradition, Savor the Innovation";
    homePage.appendChild(tagline);
}

export { homePageFunction }