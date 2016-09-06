'use strict';

let $products = document.querySelector('.products');
$products.innerHTML = '';

const standardProducts = new StandardProducts('product', 'Produkty');
const specialProducts = new SpecialProducts('product special', 'Produkty specjalne');
console.dir(standardProducts);

const view = new View();
view.renderProducts(specialProducts, $products);
view.renderProducts(standardProducts, $products);
