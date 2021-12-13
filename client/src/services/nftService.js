import { request } from './requester';

const baseUrl = 'http://localhost:3030/nfts';

export const getAll = () => request(`${baseUrl}/all`)

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