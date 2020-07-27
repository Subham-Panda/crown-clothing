import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

import CollectionPreview from '../preview-collection/preview-collection.component'

import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => {
    return ( 
        <div className="collections-overview">
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
     );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
 
export default connect(mapStateToProps)(CollectionsOverview);
