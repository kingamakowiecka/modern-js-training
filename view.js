'use strict';

class View {
    renderProducts (model, $target) {
        const products = model.getProducts();
        const productType = model.getProductType();

        $target.appendChild(this._renderProductTitle(model.getProductsTypeTitle()))

        for (let idx in products) {
            const $product = this._renderProduct(products[idx], productType);
            $target.appendChild($product);
        }
    };

    _renderProduct (data, productType) {
        const $product_img = document.createElement('img');
        $product_img.className = 'product__img';
        $product_img.src = data['img'];

        const $product_name = document.createElement('h3');
        $product_name.className = 'product__name';
        $product_name.textContent = data['name'];

        const $product_category = document.createElement('h4');
        $product_category.className = 'product__category';
        $product_category.textContent = data['category'];

        const $product_description = document.createElement('p');
        $product_description.className = 'product__description';
        $product_description.textContent = data['description']

        const $product_price = document.createElement('h1');
        $product_price.className = 'product__price';
        $product_price.textContent = data['price'];

        const $product_button = document.createElement('button');
        $product_button.className = 'product__button';
        $product_button.textContent = data['button'];
        $product_button.addEventListener("click", function () {
            alert("are you sure?");
        })

        const $product_div = document.createElement('div');
        $product_div.className = productType;
        $product_div.appendChild($product_img);
        $product_div.appendChild($product_name);
        $product_div.appendChild($product_category);
        $product_div.appendChild($product_description);
        $product_div.appendChild($product_price);
        $product_div.appendChild($product_button);

        return $product_div;
    };

    _renderProductTitle(productTypeTitle) {
        const $title = document.createElement('h1');
        $title.className = 'product__type__title';
        $title.textContent = productTypeTitle;

        const $product_title_div = document.createElement('div');
        $product_title_div.className = 'product__type';
        $product_title_div.appendChild($title);

        return $product_title_div;
    }
}
