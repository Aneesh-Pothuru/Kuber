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
                name: 'iPhone 11 Pro',
                imageUrl: '',
                price: '',
            },
            {
                id: 2,
                name: 'MacBook Pro',
                imageUrl: '',
                price: '',
            },
            {
                id: 3,
                name: 'Lenovo ThinkPad',
                imageUrl: '',
                price: '',
            },
            {
                id: 4,
                name: 'iPhone 6S',
                imageUrl: '',
                price: '',
            },
            {
                id: 5,
                name: 'iPhone X',
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
                name: 'Jordan 1 Retro High Royal Toe',
                imageUrl: '',
                price: '',
            },
            {
                id: 2,
                name: 'Jordan 1 Retro High Off-White University Blue',
                imageUrl: '',
                price: '',
            },
            {
                id: 3,
                name: 'The North Face Crewneck',
                imageUrl: '',
                price: '',
            },
            {
                id: 4,
                name: 'FEAR OF GOD Jacket',
                imageUrl: '',
                price: '',
            },
            {
                id: 5,
                name: 'Goyard Saint Sulpice Wallet',
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
                name: 'Blender',
                imageUrl: '',
                price: '',
            },
        ]
    },
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