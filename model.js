'use strict';

const Model = {
    _products: [
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
        {
            id: 3,
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
        {
            id: 4,
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
        {
            id: 5,
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
        {
            id: 6,
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
        }
    ],

    getProducts: function () {
        return Model._products.slice(0);
    }
};