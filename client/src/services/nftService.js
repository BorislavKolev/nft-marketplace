import { request } from './requester';

const baseUrl = 'http://localhost:3030/nfts';

export const getAll = () => request(`${baseUrl}/nfts`)

export const create = async (nftData, token) => {
    let response = await fetch(`${baseUrl}/nfts`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({...nftData})
    });

    let result = await response.json();

    return result;
};