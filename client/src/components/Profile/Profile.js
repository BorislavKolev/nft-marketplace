import NftList from '../NftList';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as authService from '../../services/authService';
import * as nftService from '../../services/nftService';


const Profile = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});
    const [ownedNfts, setOwnedNfts] = useState([]);
    const [favouriteNfts, setFavouriteNfts] = useState([]);
    const [createdNfts, setCreatedNfts] = useState([]);

    useEffect(() => {
        authService.getOne(userId)
            .then(result => {
                setUser(result.user);
            })
            .catch(err => {
                console.log(err);
            })

        nftService.getCollection(user.ownedNfts)
            .then(result => {
                setOwnedNfts(result)
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    
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
                            </span> <a><b>Balance:</b> {user.balance} ETH</a>
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