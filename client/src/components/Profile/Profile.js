import { useState, useEffect } from 'react';
import NftList from '../NftList';

import * as nftService from '../../services/nftService';
import * as authService from '../../services/authService';

import { useAuthContext } from '../../contexts/AuthContext';

const Profile = () => {
    const [ownedNfts, setOwnedNfts] = useState([]);
    const [createdNfts, setCreatedNfts] = useState([]);
    const [favouriteNfts, setFavouriteNfts] = useState([]);
    const [balance, setBalance] = useState(0);

    const { user } = useAuthContext();

    useEffect(() => {
        nftService.getMyOwnedNfts(user._id)
            .then(nftResult => {
                setOwnedNfts(nftResult[0]);
            });
    }, []);

    useEffect(() => {
        nftService.getMyCreatedNfts(user._id)
            .then(nftResult => {
                setCreatedNfts(nftResult[0]);
            });
    }, []);

    useEffect(() => {
        nftService.getMyFavouriteNfts(user._id)
            .then(nftResult => {
                setFavouriteNfts(nftResult[0]);
            });
    }, []);

    useEffect(() => {
        authService.getOne(user._id)
            .then(userResult => {
                setBalance(userResult.balance);
            });
    }, []);

    console.log(user);

    return (
        <div className="page-section border-top">
            <div className="container">
                <div className="blog-single-wrap">
                    <h1 className="post-title">{user.username}</h1>
                    <div className="post-meta">
                        <div className="post-date">
                            <span className="icon">
                                <span className="mai-mail-outline"></span>
                            </span> <a><b>Email:</b> {user.email}</a>
                        </div>
                        <div className="post-comment-count ml-2">
                            <span className="icon">
                                <span className="mai-cash-outline"></span>
                            </span> <a><b>Balance:</b> {balance} ETH</a>
                        </div>
                    </div>
                </div>
                <div className="text-center wow fadeInUp">
                    <h2 className="title-section">{user.username}'s<span className="marked"> OWNED </span>NFTs</h2>
                    <div className="divider mx-auto"></div>
                </div>
                <div className="row my-5 card-blog-row">
                    <NftList nfts={ownedNfts} />
                </div>
                <div className="text-center wow fadeInUp">
                    <h2 className="title-section">{user.username}'s<span className="marked"> FAVOURITE </span>NFTs</h2>
                    <div className="divider mx-auto"></div>
                </div>
                <div className="row my-5 card-blog-row">
                    <NftList nfts={favouriteNfts} />
                </div>
                <div className="text-center wow fadeInUp">
                    <h2 className="title-section">{user.username}'s<span className="marked"> CREATED </span>NFTs</h2>
                    <div className="divider mx-auto"></div>
                </div>
                <div className="row my-5 card-blog-row">
                    <NftList nfts={createdNfts} />
                </div>
            </div>
        </div>
    )
}

export default Profile;