import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './collections.scss'
import ShopItems from "../shopItems/shopItems"
import { selectCollections } from '../../redux/shop/shop.selectors'

const Collections = ({ collections }) => (
    <div className='collections'>
        {
            collections.map(({ id, ...itemProps }) => (
                <ShopItems key={id} {...itemProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(Collections);