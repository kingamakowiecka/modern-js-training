require('normalize.css');
require('../styles/styles.css');

import {StandardProducts, SpecialProducts} from './Model';
import {View} from './View';

let $products = document.querySelector('.products');

$products.innerHTML = '';
const standardProducts = new StandardProducts('product', 'Produkty');
const specialProducts = new SpecialProducts('product special', 'Produkty specjalne');

const view = new View();
view.renderProducts(specialProducts, $products);
view.renderProducts(standardProducts, $products);