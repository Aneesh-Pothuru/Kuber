import React from 'react';
import { Route } from 'react-router-dom'
import Collections from '../collections/collections'
import Directory from '../directory/directory'

const Shop = ({ match }) => {
    console.log(match)
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={Collections} />
            <Route path={`${match.path}/:directoryId`} component={Directory} />
        </div>
    )
}


export default Shop;