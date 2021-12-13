import * as request from './requester';

const baseUrl = 'http://localhost:3030/nfts';

export const getAll = () => request.get(`${baseUrl}/all`)

export const create = async (nftData) => {
    let response = await fetch(`${baseUrl}/create`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({...nftData})
    });

    let result = await response.json();

    return result;
};

export const getOne = (nftId) => {
    return fetch(`${baseUrl}/${nftId}/details`)
        .then(res => res.json())
};

export const update = (nftId, nftData) => request.post(`${baseUrl}/${nftId}/update`, nftData);