

function menuPageFunction() {
    //remove backgrond color from home page
    let homePage = document.querySelector("#content")
    homePage.style.backgroundImage = "url('https://img.freepik.com/free-vector/organic-flat-rustic-restaurant-menu-template-with-photo_52683-62703.jpg?t=st=1722853613~exp=1722857213~hmac=93109975bd63f973755abece61562895afa107af85d9808a3f6c939dd161b333&w=900')"

    let menuImg = document.createElement("img")
    menuImg.src = "https://img.freepik.com/free-vector/organic-flat-rustic-restaurant-menu-template-with-photo_52683-62703.jpg?t=st=1722853613~exp=1722857213~hmac=93109975bd63f973755abece61562895afa107af85d9808a3f6c939dd161b333&w=900";
    homePage.appendChild(menuImg)

    // remove contact page styling
    homePage.classList.remove("styleMe")
}

export { menuPageFunction }