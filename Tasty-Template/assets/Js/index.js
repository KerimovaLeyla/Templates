let product = document.getElementById("product")
let loadbtn = document.getElementById("loadbtn")
let menubtn = document.getElementById("menubtn")
let menu = document.getElementById("menu")
let ul = document.querySelector("ul")
let page = 1
let limit = 4
async function getProduct() {
    loadbtn.addEventListener("click", getProduct)
    await axios.get(`https://65680f6b9927836bd9740785.mockapi.io/swp102/product?page=${page}&limit=${limit}`)
        .then((res) => {
            db = res.data
            db.forEach((item) => {
                let div = document.createElement("div")
                div.className = "box"
                div.innerHTML = `
            <i id="wish" onclick="wishAdded(${item.id})" class="fa-solid fa-heart"></i>
            <img src="${item.image}" alt="">
            <p>${item.title}</p>
            <h6>${item.price} $</h6>
            <button onclick="addToCart(${item.id})"><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
        `
                product.appendChild(div)
            })
            page++
        })
        .catch((err) => console.log(err))
}
getProduct()

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItem = cart.find((item) => item.id == id);
    if (cartItem) {
        cartItem.count = (cartItem.count || 1) + 1;
    } else {
        let newItem = { ...db.find((item) => item.id == id), count: 1 };
        cart.push(newItem);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
}

function wishAdded(id) {
    let wish = JSON.parse(localStorage.getItem("wish")) || [];
    let wishItem = wish.find((item) => item.id == id);
    if (wishItem) {
        alert("Wislistde artiq bu mehsul var !")
    } else {
        wish.push(db.find((item) => item.id == id));
        localStorage.setItem("wish", JSON.stringify(wish));
    }
    console.log(wish);
}
