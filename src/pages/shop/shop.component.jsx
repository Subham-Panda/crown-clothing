import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {connect} from  'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionStart } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';


class ShopPage extends Component {

    componentDidMount() {
        const {fetchCollectionStart} = this.props;
        fetchCollectionStart();
    }

    render() {
        const {match} = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>     
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />       
            </div>
        );
    }
    4
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);