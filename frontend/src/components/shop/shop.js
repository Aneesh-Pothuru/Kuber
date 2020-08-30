import React from 'react';

const items = [
    {
        id: 1,
        title: 'Electronics',
        routeName: 'electronics',
        items: [
            {

            }
        ]
    },
    {
        id: 2,
        title: 'Fashion',
        routeName: 'fashion',
        items: [
            {

            }
        ]
    },
    {
        id: 3,
        title: 'Home',
        routeName: 'home',
        items: [
            {

            }
        ]
    },
    {
        id: 4,
        title: 'Sports',
        routeName: 'sports',
        items: [
            {

            }
        ]
    },
    {
        id: 5,
        title: 'Industrial',
        routeName: 'industrial',
        items: [
            {

            }
        ]
    },
    {
        id: 6,
        title: 'Toys',
        routeName: 'toys',
        items: [
            {

            }
        ]
    },
    {
        id: 7,
        title: 'Motors',
        routeName: 'motors',
        items: [
            {

            }
        ]
    },
    {
        id: 8,
        title: 'Music',
        routeName: 'music',
        items: [
            {

            }
        ]
    },
    {
        id: 9,
        title: 'Garden',
        routeName: 'garden',
        items: [
            {

            }
        ]
    }

]

class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: items
        }
    }
}