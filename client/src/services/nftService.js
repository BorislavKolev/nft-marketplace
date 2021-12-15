import * as request from './requester';

const baseUrl = 'http://localhost:3030/nfts';

export const getAll = () => request.get(`${baseUrl}/all`)

export const create = async (nftData) => {
    let response = await fetch(`${baseUrl}/create`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ ...nftData })
    });

    let result = await response.json();

    return result;
};

export const getOne = (nftId) => {
    return fetch(`${baseUrl}/${nftId}/details`)
        .then(res => res.json())
};

export const update = (nftId, nftData) => request.post(`${baseUrl}/${nftId}/update`, nftData);

export const remove = async (nftId) => {
    await request.get(`${baseUrl}/${nftId}/remove`)
};

export const getCollection = async (nftCollectionAsIds) => {
    let resultNfts = [];

    for (let i = 0; i < nftCollectionAsIds.length; i++) {
        console.log(nftCollectionAsIds[i]);
        fetch(`${baseUrl}/${nftCollectionAsIds[i]}/details`)
            .then(res => res.json())
            .then(res => resultNfts.push(res.nft));
    }
    console.log('in getCol');

    console.log(resultNfts);
    return resultNfts;
}

export const getMyOwnedNfts = (userId) => request.get(`${baseUrl}/${userId}/ownedNfts`);

export const getMyCreatedNfts = (userId) => request.get(`${baseUrl}/${userId}/createdNfts`);

export const getMyFavouriteNfts = (userId) => request.get(`${baseUrl}/${userId}/favouriteNfts`);
