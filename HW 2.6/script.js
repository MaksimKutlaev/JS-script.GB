const products = JSON.parse(productsData);
let productsList = document.querySelector('.box_section');
productsList.querySelector('.box_item').style.display = "none";

let productItem = productsList.querySelector('.box_item');


products.forEach(element => {
    let product = productItem.cloneNode(true);
    product.style = 'flex';
    product.querySelector('.box_img').src = element.imgURL;
    product.querySelector('.box_item_name').textContent = element.name;
    product.querySelector('.box_item_name').href = element.link;
    product.querySelector('.box_description').textContent = element.description;
    product.querySelector('.box_price').textContent = `$${element.price}`;
    productsList.appendChild(product);
});

