import NftList from '../NftList';

const Profile = () => {
    let nfts = [];

    return (
            <div className="page-section border-top">
                <div className="container">
                    <div className="blog-single-wrap">
                        <h1 className="post-title">sharwinchester</h1>
                        <div className="post-meta">
                            <div className="post-date">
                                <span className="icon">
                                    <span className="mai-mail-outline"></span>
                                </span> <a><b>Email:</b> kolevbv@gmail.com</a>
                            </div>
                            <div className="post-comment-count ml-2">
                                <span className="icon">
                                    <span className="mai-cash-outline"></span>
                                </span> <a><b>Balance:</b> 4.2 ETH</a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center wow fadeInUp">
                        <h2 className="title-section">sharwinchester's<span className="marked"> OWNED </span>NFTs</h2>
                        <div className="divider mx-auto"></div>
                    </div>
                    <div className="row my-5 card-blog-row">
                    <NftList nfts={nfts} />
                    </div>
                    <div className="text-center wow fadeInUp">
                        <h2 className="title-section">sharwinchester's<span className="marked"> FAVOURITE </span>NFTs</h2>
                        <div className="divider mx-auto"></div>
                    </div>
                    <div className="row my-5 card-blog-row">
                    <NftList nfts={nfts} />
                    </div>
                    <div className="text-center wow fadeInUp">
                        <h2 className="title-section">sharwinchester's<span className="marked"> CREATED </span>NFTs</h2>
                        <div className="divider mx-auto"></div>
                    </div>
                    <div className="row my-5 card-blog-row">
                    <NftList nfts={nfts} />
                    </div>
                </div>
            </div>
    )
}

export default Profile;