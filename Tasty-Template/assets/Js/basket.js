let product = document.getElementById("product")

function getProduct() {
    product.innerHTML = ""
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.forEach((item, index) => {
        let div = document.createElement("div")
        div.className = "box"
        div.innerHTML = `
    <img src="${item.image}" alt="">
    <p>${item.title}</p>
    <h6>${item.price} $</h6>
    <h6>count : ${item.count} </h6>
    <button onclick="rmvToCart(${index})"><i class="fa-solid fa-cart-shopping"></i> Remove to cart</button>
`
        product.appendChild(div)
    })
}
getProduct()

function rmvToCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let removedItem = cart[index];
    if (removedItem && removedItem.count > 1) {
        removedItem.count--;
    } else {
        cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    getProduct();
}
