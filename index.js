import { menuArray } from "./data.js"
let orderArr = []

// Event Listeners to listen to specific events by users

document.addEventListener('click', function(e){
    if(e.target.dataset.add){
        addProduct(e.target.dataset.add)
    } 
  
})

// Content functions
function addProduct(productId){
    const productItem = menuArray.filter(function(product){
        return product.id == productId
    })[0]
    orderArr.push(productItem)
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
                            <h3>$${product.price}</h3>
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

function render(){
    document.getElementById("menu").innerHTML = getMenu();
}
render()