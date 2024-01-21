let products = {
    data: [
        {
            name: "MATRIX 1999 DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/matrix-1999-1.jpg"
        },

        {
            name: "RAEDA DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Raeda-Deck.jpg"
        },

        {
            name: "MUSTY DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Musty-Deck.jpg"
        },

        {
            name: "TRISTIQUE DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Tristique-deck.jpg"
        },

        {
            name: "FIELD TRIP DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Fied-Trip-deck.jpg"
        },

        {
            name: "TARO RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-5.jpg"
        },

        {
            name: "NEON RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-1.jpg"
        },

        {
            name: "ORANAGE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-2.jpg"
        },

        {
            name: "BLUE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-3.jpg"
        },

        {
            name: "WHITE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-4.jpg"
        },

        {
            name: "CUTIS MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cutis.jpg"
        },

        {
            name: "CAM VU MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cam-vu.jpg"
        },

        {
            name: "SON NGUYEN MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/son-nguyen.jpg"
        },
    ]
}

showSLCart()

const data = products.data

for (let index = 0; index < data.length; index++) {
    const product = data[index];
    
    let card = document.createElement("div")
    card.classList.add("card")

    let img_container = document.createElement("div")
    img_container.classList.add("image-container")
    card.appendChild(img_container)

    let img = document.createElement("img")
    img.setAttribute("src", product.image)
    img_container.appendChild(img)

    let container = document.createElement("div")
    container.classList.add("container")
    card.appendChild(container)

    let h6 = document.createElement("h6")
    h6.innerText = product.name
    container.appendChild(h6)

    let h5 = document.createElement("h5")
    h5.innerText = product.price
    container.appendChild(h5)

    let button = document.createElement("button")
    button.innerText = "Thêm vào giỏ hàng"
    button.onclick = () =>{
        addToCart(product)
    } 
    container.appendChild(button)

    document.getElementById("products").appendChild(card)
}

function addToCart(product){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(product)
    localStorage.setItem("cart", JSON.stringify(cart))

    showSLCart()
}

function showSLCart(){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    if (cart.length == 0){
        document.getElementById("cart").style.display = "none"
    } else
    {
        document.getElementById("cart").style.display = "inline"
        document.getElementById("cart").innerText = cart.length
    }
}