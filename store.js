
var item;
item = new Array()

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    
}


function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log("title: " + title)
    console.log("price: " + price)
    console.log("imagesrc: " + imageSrc)
    if(typeof(Storage)!=="undefined")
    {
        item.push(title,price,imageSrc)
     
        sessionStorage.setItem("item", item)
        console.log(sessionStorage.item)
        alert(title + ' added to cart')
    }
    
}
