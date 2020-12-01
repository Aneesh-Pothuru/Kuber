import React from 'react';
import Items from '../items/items';
import './category.scss';
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { createStructuredSelector } from 'reselect'

const category = ({ sections }) => {
    return (
        <div className='menu'>{
            sections.map((section) => (
                <Items key={section.id} title={section.title} imageUrl={section.imageUrl} linkUrl={section.linkUrl} />
            ))
        } </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(category);