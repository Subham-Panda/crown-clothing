import { takeLatest, call, put, all } from 'redux-saga/effects'

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions'

import ShopActionTypes from './shop.types'

export function* onfetchCollectionsStart() {
    
    try {
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message))
    }

    // const collectionRef = firestore.collection('collections');
    // dispatch(fetchCollectionStart());

    // collectionRef.get()
    // .then(snapshot => {
    //     const collectionsMap = covertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionsSuccess(collectionsMap))
    // }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, onfetchCollectionsStart)
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}