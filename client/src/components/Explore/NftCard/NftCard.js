import { Link} from 'react-router-dom';

const NftCard = ({
    nft
}) => {
    return (

        <div className="col-md-6 col-lg-3 py-3 wow fadeInUp">
        <div className="card-blog">
          <div className="header">
            <div className="testi-image">
              <img src={nft.imageUrl} alt="" />
            </div>
            <div className="entry-footer">
              <div className="post-author">{nft.title}</div>
              <a href="#" className="post-date">{nft.price} ETH</a>
            </div>
          </div>          
          <div className="footer">
            <a href="blog-single.html">Details <span className="mai-chevron-forward text-sm"></span></a>
          </div>
        </div>
      </div>
    );
}

export default NftCard;

