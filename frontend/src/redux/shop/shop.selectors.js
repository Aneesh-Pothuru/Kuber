import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    electronics: 1,
    fashion: 2,
    home: 3
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrl =>
    createSelector(
        [selectCollections],
        collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrl])
    )