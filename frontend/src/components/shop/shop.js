import React from 'react';

import ShopItems from "../shopItems/shopItems"

const items = [
    {
        id: 1,
        title: 'Electronics',
        routeName: 'electronics',
        items: [
            {
                id: 1,
                name: '',
                imageUrl: '',
                price: '',
            },
        ]
    },
    {
        id: 2,
        title: 'Fashion',
        routeName: 'fashion',
        items: [
            {
                id: 1,
                name: '',
                imageUrl: '',
                price: '',
            },
        ]
    },
    {
        id: 3,
        title: 'Home',
        routeName: 'home',
        items: [
            {
                id: 1,
                name: '',
                imageUrl: '',
                price: '',
            },
        ]
    },
    {
        id: 4,
        title: 'Sports',
        routeName: 'sports',
        items: [
            {
                id: 1,
                name: '',
                imageUrl: '',
                price: '',
            },
        ]
    },
    {
        id: 5,
        title: 'Industrial',
        routeName: 'industrial',
        items: [
            {
                id: 1,
                name: '',
                imageUrl: '',
                price: '',
            },
        ]
    },
    {
        id: 6,
        title: 'Toys',
        routeName: 'toys',
        items: [
            {
                id: 1,
                name: '',
                imageUrl: '',
                price: '',
            },
        ]
    },
    {
        id: 7,
        title: 'Motors',
        routeName: 'motors',
        items: [
            {
                id: 1,
                name: '',
                imageUrl: '',
                price: '',
            },
        ]
    },
    {
        id: 8,
        title: 'Music',
        routeName: 'music',
        items: [
            {
                id: 1,
                name: '',
                imageUrl: '',
                price: '',
            },
        ]
    },
    {
        id: 9,
        title: 'Garden',
        routeName: 'garden',
        items: [
            {
                id: 1,
                name: '',
                imageUrl: '',
                price: '',
            },
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

    render() {
        const { collections } = this.state
        return (<div className='shop-page'>
            {
                collections.map(({ id, ...itemProps }) => (
                    <ShopItems key={id} {...itemProps} />
                ))
            }
        </div>)
    }
}

export default Shop;