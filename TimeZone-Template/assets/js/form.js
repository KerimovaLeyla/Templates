let form = document.getElementById('form');
form.addEventListener('submit', formPost);
let namee = document.getElementById("name")
let surname = document.getElementById("surname")
function formPost(e) {
    e.preventDefault()
    let data = {
        name: namee.value,
        surname: surname.value
    }
    axios.post("https://65680f6b9927836bd9740785.mockapi.io/swp102/basket", data)
    .then(() => displaySeen())
    namee.value = ""
    surname.value = ""
}

let displayProduct = document.getElementById('display');

async function displaySeen() {
    displayProduct.innerHTML = ""
    let res = await axios.get("https://65680f6b9927836bd9740785.mockapi.io/swp102/basket");
    let data = res.data;
    data.forEach((item) => {
        let div = document.createElement("div");
        div.className = "box"
        div.innerHTML = `
        <p><span>Name</span> : ${item.name} </p>
        <p><span>Surname</span>: ${item.surname}</p>
        <button onclick="deletePost(${item.id})">Delete</button>
        `
        displayProduct.appendChild(div)
    })
}
displaySeen();
function deletePost(id) {
    axios.delete(`https://65680f6b9927836bd9740785.mockapi.io/swp102/basket/${id}`)
    .then(() => displaySeen())
}