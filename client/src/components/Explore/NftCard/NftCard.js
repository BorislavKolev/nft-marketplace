import { Link} from 'react-router-dom';

const NftCard = ({
    nft
}) => {
    return (
        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div className="nft__item">
            {/* <div className="author_list_pp">
                <a href="02_dark-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Fred Ryan">                                    
                    <img className="lazy" src="/images/author/author-12.jpg" alt=""/>
                    <i className="fa fa-check"></i>
                </a>
            </div> */}
            <div className="nft__item_wrap">
               
                <a href="02_dark-item-details.html">
                    <img src={nft.imageUrl} className="lazy nft__item_preview" alt=""/>
                </a>
            </div>
            <div className="nft__item_info">
                <a href="02_dark-item-details.html">
                    <h4>{nft.title}</h4>
                </a>
                <div className="nft__item_click">
                    <span></span>
                </div>
                <div className="nft__item_price">
                    0.52 ETH
                </div>
                {/* <div className="nft__item_action">
                    <a href="#">Place a bid</a>
                </div> */}
                <div className="nft__item_like">
                    <i className="fa fa-heart"></i><span>58</span>
                </div>                                 
            </div> 
        </div>
        </div>
    );
}

export default NftCard;

