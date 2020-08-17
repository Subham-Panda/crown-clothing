import React from 'react';
import {Link} from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component'

import './preview-collection.styles.scss';

const CollectionPreview = ({ title, items, route }) => (
    <div className="collection-preview">
        {route}
        <Link to={`/shop/${title.toLowerCase()}`} className="title">{title.toUpperCase()}</Link>
        <div className="preview">
            {
                items.slice(0,4).map((item)=> (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;