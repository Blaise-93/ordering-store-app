import { menuArray } from "./data.js"
let orderArr = []

// Event Listeners to listen to specific events by users

document.addEventListener('click', function(e){
    if(e.target.dataset.add){
        addProduct(e.target.dataset.add)
    } 
    else if (e.target.dataset.remove) {
        removeProduct(e.target.dataset.remove)
    }
})

// Content functions
function addProduct(productId){
    const productItem = menuArray.filter(function(product){
        return product.id == productId
    })[0]
    orderArr.push(productItem)
    renderOrder()
    calculateOrder()
}

function removeProduct(productIndex) {
    orderArr.splice(productIndex, 1) 
    renderOrder()
    calculateOrder()
    
    
}

function calculateOrder() {
    let totalOrder = 0
    orderArr.forEach(function(orderProduct) {
        totalOrder = orderProduct.price
    })
    document.querySelector('#total-price').innerHTML = "₦" + totalOrder
}

function getProduct() {
    let productHtml = ``
    orderArr.forEach(function(product, index) {
        productHtml += `
                    <div id="order-product" class="order-product">
                        <div class="order-desc">
                            <h2>${product.name}</h2>
                            <button class="remove-btn" data-remove="${index}">Delete</button> 
                        </div>                 
                        <p>$${product.price}</p>
                    </div>
        `
    })
    return productHtml
}


function getMenu(){
    let menuHtml = ``
    menuArray.forEach((product) => {
        menuHtml += `
                    <div class="product-container">
                        <div class="product-img">
                            ${product.emoji}
                        </div>
                        <div class="product-content">
                            <h2>${product.name}</h2>
                            <p class="product-ingredients">${product.ingredients}</p>
                            <h3>₦${product.price}</h3>
                        </div>
                        <div class="product-btn">
                            <button class="add-btn" data-add="${product.id}">+</button>
                        </div>
                    </div>
                    <hr>
                    `
    })
    return menuHtml;
}

function renderOrder() {
    document.getElementById('product-inner').innerHTML = getProduct()
    if (orderArr.length > 0) {
        document.querySelector('.order').classList.remove('hidden')
    }
    else {
        document.querySelector('.order').classList.add('hidden')
    }
}

function render(){
    document.getElementById("menu").innerHTML = getMenu();
}
render()