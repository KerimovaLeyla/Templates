let product = document.getElementById("products");
let inp = document.getElementById('inp');

function getData() {
    product.innerHTML = "";
    let data = JSON.parse(localStorage.getItem('cart')) || [];
    data.forEach((item, index) => {
        if (item && item.image && item.title && item.price) {
            let div = document.createElement("div");
            div.className = "box";
            div.innerHTML = `
            <img src="${item.image}" alt="">
            <p>${item.title}</p>
            <h3>$${item.price}</h3>
            <button onclick="removetoCart(${index})">Remove to cart</button>
            `;
            product.appendChild(div);
        }
    });
}

function removetoCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    getData();
}

function display(data) {
    product.innerHTML = "";
    data.forEach((item) => {
        if (item && item.image && item.title && item.price) {
            let div = document.createElement("div");
            div.className = "box";
            div.innerHTML = `
            <img src="${item.image}" alt="">
            <p>${item.title}</p>
            <h3>$${item.price}</h3>
            <button onclick="addtoCart(${item.id})"><i class="fa-solid fa-cart-shopping"></i>Add to cart</button>
            `;
            product.appendChild(div);
        }
    });
}

document.getElementById("min").addEventListener('click', minSort);

function minSort() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let data = cart.filter(item => item && item.price);
    data.sort((a, b) => a.price - b.price);
    display(data);
}

document.getElementById("max").addEventListener('click', maxSort);

function maxSort() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let data = cart.filter(item => item && item.price);
    data.sort((a, b) => b.price - a.price);
    display(data);
}

let form = document.getElementById('form');
form.addEventListener('submit', search);

function search(e) {
    e.preventDefault();
    let val = inp.value;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let data = cart.filter((item) => item && item.title && item.title.toLowerCase().includes(val.toLowerCase()));
    display(data);
}

getData();
