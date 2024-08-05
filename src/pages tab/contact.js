import "../styles/contactStyle.css"

function contactPageFunction() {
    //remove backgrond color from home page
    let homePage = document.querySelector("#content")
    homePage.style.backgroundImage = "";

    //add class to style page
    homePage.classList.add("styleMe")
    homePage.innerHTML = "walk in and place your order cuz I'm too lazy to set up a contact page."
}

export { contactPageFunction }