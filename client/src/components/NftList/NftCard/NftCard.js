import { Link} from 'react-router-dom';

import './NftCard.css';

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
              <div><b>{nft.title}</b></div>
              <a> <span className="mai-cash-outline"></span>{nft.price} ETH</a>
            </div>
          </div>          
          <div className="footer">
            <Link className="btn btn-primary border ml-1" to={`/details/${nft._id}`}>Details <span className="mai-chevron-forward text-sm"></span></Link>
          </div>
        </div>
      </div>
    );
}

export default NftCard;

