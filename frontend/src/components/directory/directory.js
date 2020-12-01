import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selectors'
import ShopItems from "../exploreItems/exploreItems"
import './directory.scss'

const Directory = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className='directory'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => (
                        <ShopItems key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.directoryId)(state)
})

export default connect(mapStateToProps)(Directory);