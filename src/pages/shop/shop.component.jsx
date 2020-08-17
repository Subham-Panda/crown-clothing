import React, { useEffect} from 'react';
import { Route } from 'react-router-dom';
import {connect} from  'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionStart} from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';


const ShopPage = ({match, fetchCollectionStart}) => {

    useEffect(() => {
        fetchCollectionStart();
    },[fetchCollectionStart])

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>     
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />       
        </div>
    );
    
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);