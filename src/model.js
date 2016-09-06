class Products {
    getProducts() {
        return this.products.slice(0);
    }

    getProductType() {
        return this.productType;
    }

    getProductsTypeTitle() {
        return this.productsTypeTitle;
    }
}

export class StandardProducts extends Products {
    constructor(productType, productsTypeTitle) {
        super();
        this.productType = productType;
        this.productsTypeTitle = productsTypeTitle;
        this.products = [
            {
                id: 1,
                img: 'http://www.notebookcheck.pl/fileadmin/_processed_/csm_5_a0e0078ec6.jpg',
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
                img: 'http://www.notebookcheck.pl/fileadmin/_processed_/csm_5_a0e0078ec6.jpg',
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
            {
                id: 3,
                img: 'http://www.notebookcheck.pl/fileadmin/_processed_/csm_5_a0e0078ec6.jpg',
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
            {
                id: 4,
                img: 'http://www.notebookcheck.pl/fileadmin/_processed_/csm_5_a0e0078ec6.jpg',
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
            {
                id: 5,
                img: 'http://www.notebookcheck.pl/fileadmin/_processed_/csm_5_a0e0078ec6.jpg',
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
            {
                id: 6,
                img: 'http://www.notebookcheck.pl/fileadmin/_processed_/csm_5_a0e0078ec6.jpg',
                name: 'Dell Vostro',
                category: 'Komputery',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
                ' incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
                ' laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit' +
                ' esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit' +
                'anim id est laborum.',
                price: '199,00 EUR',
                button: 'Kup teraz!'
            }
        ];
    }
}


export class SpecialProducts extends Products {
    constructor(productType, productsTypeTitle) {
        super();
        console.log(this);
        this.productType = productType;
        this.productsTypeTitle = productsTypeTitle;
        this.products = [
            {
                id: 1,
                img: 'http://www.notebookcheck.pl/fileadmin/_processed_/csm_5_a0e0078ec6.jpg',
                name: 'SpecialDell Latitude',
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
                img: 'http://www.notebookcheck.pl/fileadmin/_processed_/csm_5_a0e0078ec6.jpg',
                name: 'SpecialDell Vostro',
                category: 'Komputery',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
                ' incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
                ' laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit' +
                ' esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit' +
                'anim id est laborum.',
                price: '199,00 EUR',
                button: 'Kup teraz!'
            },
            {
                id: 3,
                img: 'http://www.notebookcheck.pl/fileadmin/_processed_/csm_5_a0e0078ec6.jpg',
                name: 'SpecialDell Vostro',
                category: 'Komputery',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' +
                ' incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco' +
                ' laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit' +
                ' esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit' +
                'anim id est laborum.',
                price: '199,00 EUR',
                button: 'Kup teraz!'
            }
        ];
    }
}