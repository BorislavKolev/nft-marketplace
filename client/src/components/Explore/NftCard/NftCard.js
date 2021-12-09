import { Link} from 'react-router-dom';

const NftCard = ({
    nft
}) => {
    return (
        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div className="nft__item">
            {/* <div className="author_list_pp">
                <a href="02_dark-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Fred Ryan">                                    
                    <img className="lazy" src="images/author/author-12.jpg" alt=""/>
                    <i className="fa fa-check"></i>
                </a>
            </div> */}
            <div className="nft__item_wrap">
                <div className="nft__item_extra">
                    <div className="nft__item_buttons">
                        <button onclick="location.href='02_dark-item-details.html'">Buy Now</button>
                        <div className="nft__item_share">
                            <h4>Share</h4>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg"></i></a>
                        </div>
                    </div>
                </div>
                <a href="02_dark-item-details.html">
                    <img src="https://docs.troika.io/content/images/size/w2000/2021/07/Bored-Ape-Yacht-Club.png" className="lazy nft__item_preview" alt=""/>
                </a>
            </div>
            <div className="nft__item_info">
                <a href="02_dark-item-details.html">
                    <h4>Two Tigers</h4>
                </a>
                <div className="nft__item_click">
                    <span></span>
                </div>
                <div className="nft__item_price">
                    0.02 ETH
                </div>
                {/* <div className="nft__item_action">
                    <a href="#">Place a bid</a>
                </div> */}
                <div className="nft__item_like">
                    <i className="fa fa-heart"></i><span>73</span>
                </div>                                 
            </div> 
        </div>
        </div>
    );
}

export default NftCard;

