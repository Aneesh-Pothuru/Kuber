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
        ]
    },
    {
        id: 2,
        title: 'Fashion',
        routeName: 'fashion',
        items: [
            {
                id: 1,
                name: 'Air Jordan 1s',
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