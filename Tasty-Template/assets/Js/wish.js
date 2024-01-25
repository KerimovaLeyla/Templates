let product = document.getElementById("product")

function getProduct() {
    product.innerHTML= ""
    let wish = JSON.parse(localStorage.getItem("wish")) || []
    wish.forEach((item, index) => {
        let div = document.createElement("div")
        div.className = "box"
        div.innerHTML = `
    <img src="${item.image}" alt="">
    <p>${item.title}</p>
    <h6>${item.price} $</h6>
    <button onclick="rmvToCart(${index})"><i class="fa-solid mx-2 fa-trash"></i> Remove to cart</button>
`
        product.appendChild(div)
    })
}
getProduct()

function rmvToCart(index) {
    let wish = JSON.parse(localStorage.getItem("wish")) || []
    wish.splice(index, 1)
    localStorage.setItem("wish", JSON.stringify(wish))
    getProduct()
}