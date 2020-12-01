import React from 'react';
import { Route } from 'react-router-dom'
import Collections from '../collections/collections'

const Shop = ({ match }) => {
    console.log(match)
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={Collections} />
        </div>
    )
}


export default Shop;