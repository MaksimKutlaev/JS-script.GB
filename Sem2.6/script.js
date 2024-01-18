const dataProduct = JSON.parse(dataProductsJSON);
console.log(dataProduct);

let productTemplateEl = document.querySelector('#productTemplate .product');
let containerEl = document.querySelector('.container');

dataProduct.forEach(element => {
    let product = productTemplateEl.cloneNode(true);
    product.querySelector(".product__image img").src = element.image;
    product.querySelector(".product__info .product__title").textContent =element.title;
    let price = product.querySelector(".product__info .product__price");
    price.textContent = price.textContent +element.price;
    let color = product.querySelector(".product__info .product__color");
    color.textContent = color.textContent +element.color;
    let size = product.querySelector(".product__info .product__size");
    size.textContent = size.textContent +element.size;
    let quantity = product.querySelector(".product__info .product__quantity");
    quantity.textContent = quantity.textContent +element.quantity;
    
    containerEl.appendChild(product);
});
