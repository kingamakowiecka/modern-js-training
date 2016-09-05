var product_data = [
    {
        id: 1,
        img: 'http://www.automototm.eu/com64/LOGA/dell.jpg',
        name: 'Dell Latitude',
        category: 'Komputery',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
        ' incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
        ' laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit' +
        ' esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit' +
        'anim id est laborum.',
        price: '599,00 EUR',
        button: 'Kup teraz!',
    },
    {
        id: 2,
        img: 'http://www.automototm.eu/com64/LOGA/dell.jpg',
        name: 'Dell Vostro',
        category: 'Komputery',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
        ' incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
        ' laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit' +
        ' esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit' +
        'anim id est laborum.',
        price: '199,00 EUR',
        button: 'Kup teraz!'
    },
];
console.table(product_data);

for (var idx in product_data) {
    var data = product_data[idx];

    var $product_img = document.createElement('img');
    $product_img.className = 'product__img';
    $product_img.src = data['img'];

    var $product_name = document.createElement('h3');
    $product_name.className = 'product__name';
    $product_name.textContent = data['name'];

    var $product_category = document.createElement('h4');
    $product_category.className = 'product__category';
    $product_category.textContent = data['category'];

    var $product_description = document.createElement('p');
    $product_description.className = 'product__description';
    $product_description.textContent = data['description']

    var $product_price = document.createElement('h1');
    $product_price.className = 'product__price';
    $product_price.textContent = data['price'];

    var $product_button = document.createElement('button');
    $product_button.className = 'product__button';
    $product_button.textContent = data['button'];
    $product_button.addEventListener("click", function () {
        alert("are you sure?");
    })

    var $product_div = document.createElement('div');
    $product_div.className = 'product';
    $product_div.appendChild($product_img);
    $product_div.appendChild($product_name);
    $product_div.appendChild($product_category);
    $product_div.appendChild($product_description);
    $product_div.appendChild($product_price);
    $product_div.appendChild($product_button);

    var $products = document.querySelector('.products');
    $products.appendChild($product_div);
}