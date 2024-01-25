const indxproduct = document.getElementById('product')
const filter = document.getElementById('filter')
const btn = document.getElementById("loadMore")
const customername = document.getElementById('name')
const customersurname = document.getElementById('surname')
const customeremail = document.getElementById('email')
const customerform = document.getElementById('form')

function getApi() {
    page = 1;
    limit = 4;
    btn.addEventListener("click", getApi)
    axios.get(`https://65680f2a9927836bd97406ef.mockapi.io/food/products?page=${page}&limit=${limit}`)
        .then(res => {
            products = res.data
            products.map(item => {
                let product = document.createElement('div')
                product.className = 'proBox col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3'
                product.innerHTML = `
            <img src="${item.image}" alt="">
            <h3>"${item.name}"</h3>
            <p>"${item.price}"</p>
            <button onclick="addtoBasket(${item.id})"><i class="fa-solid fa-bag-shopping fa-flip" style="color: #514c94;"></i>Add to cart</button>
            <button class="hearts" onclick="addtowishlist(${item.id})"><i class="fa-solid fa-heart" style="color: #791b29;"></i></button>
            `;
                indxproduct.appendChild(product)
            })
            page++
        })
}
getApi();

function addtowishlist(id) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.push(products.find(item => item.id == id))
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
}

function addtoBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(products.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}



function sortFunc() {
    indxproduct.innerHTML = ''
    let selectvalue = filter.value

    if (selectvalue === "1") {
        page = 1
        limit = 4
        axios.get(`https://65680f2a9927836bd97406ef.mockapi.io/food/products?page=${page}&limit=${limit}`)
            .then(res => {
                products = res.data
                products.map(item => {
                    let product = document.createElement('div')
                    product.className = 'proBox col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3'
                    product.innerHTML = `
              <img src="${item.image}" alt="">
              <h3>"${item.name}"</h3>
              <p>"${item.price}"</p>
              <button onclick="addtoBasket(${item.id})"><i class="fa-solid fa-bag-shopping fa-flip" style="color: #514c94;"></i>Add to cart</button>
              <button class="hearts" onclick="addtowishlist(${item.id})"><i class="fa-solid fa-heart" style="color: #791b29;"></i></button>
              `
                    indxproduct.appendChild(product)
                })
                page++
            })
    }
}

filter.addEventListener('change', sortFunc)

function sortedFunction() {
    indxproduct.innerHTML = ''
    let selectvalue = filter.value

    if (selectvalue === "2") {
        page = 1
        limit = 4
        axios.get(`https://65680f2a9927836bd97406ef.mockapi.io/food/products?page=${page}&limit=${limit}`)
            .then(res => {
                products = res.data
                let sortProduct = products.sort((a, b) => a.name.localeCompare(b.name))
                sortProduct.map(item => {
                    let product = document.createElement('div')
                    product.className = 'proBox col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3'
                    product.innerHTML = `
              <img src="${item.image}" alt="">
              <h3>"${item.name}"</h3>
              <p>"${item.price}"</p>
              <button onclick="addtoBasket(${item.id})"><i class="fa-solid fa-bag-shopping fa-flip" style="color: #514c94;"></i>Add to cart</button>
              <button class="hearts" onclick="addtowishlist(${item.id})"><i class="fa-solid fa-heart" style="color: #791b29;"></i></button>
              `
                    indxproduct.appendChild(product)
                })
                page++
            })
    }
}
filter.addEventListener('change', sortedFunction)

function sortFunction() {
    indxproduct.innerHTML = ''
    let selectvalue = filter.value

    if (selectvalue === "3") {
        page = 1
        limit = 4
        axios.get(`https://65680f2a9927836bd97406ef.mockapi.io/food/products?page=${page}&limit=${limit}`)
            .then(res => {
                products = res.data
                let sortProduct = products.sort((a, b) => b.name.localeCompare(a.name))
                sortProduct.map(item => {
                    let product = document.createElement('div')
                    product.className = 'proBox col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3'
                    product.innerHTML = `
              <img src="${item.image}" alt="">
              <h3>"${item.name}"</h3>
              <p>"${item.price}"</p>
             <button onclick="addtoBasket(${item.id})"><i class="fa-solid fa-bag-shopping fa-flip" style="color: #514c94;"></i>Add to cart</button>
            <button class="hearts" onclick="addtowishlist(${item.id})"><i class="fa-solid fa-heart" style="color: #791b29;"></i></button>
              `
                    indxproduct.appendChild(product)
                })
                page++
            })
    }
}

filter.addEventListener('change', sortFunction)





customerform.addEventListener('submit', function (event) {
    event.preventDefault();
    axios.post('https://65680f2a9927836bd97406ef.mockapi.io/food/products', {
        customername: customername.value,
        customersurname: customersurname.value,
        customeremail: customeremail.value,
        customerpassword: customerpassword.value
    })
})


customerform.addEventListener('submit', formPost);
function formPost(e) {
    e.preventDefault()
    let data = {
        name: customername.value,
        surname: customersurname.value,
        email: customeremail.value
    }
    axios.post("https://65680f6b9927836bd9740785.mockapi.io/swp102/basket", data)
        .then(() => displaySeen())
    customername.value = ""
    customersurname.value = ""
    customeremail.value = ""
}
