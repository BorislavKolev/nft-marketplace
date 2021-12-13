import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as nftService from '../../services/nftService';

import { useAuthContext } from '../../contexts/AuthContext';


const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { nftId } = useParams();
    const [nft, setNft] = useState({});

    useEffect(() => {
        nftService.getOne(nftId)
            .then(result => {
                setNft(result.nft);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return(
        <div className="page-section">
            <p></p>
            <p></p>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 py-3">
            <div className="card-blog2">
          <div>
            <div className="testi-image2">
              <img src={nft.imageUrl} alt="" />
            </div>
          </div>          
        </div>
              {/* <div className="img-fluid text-center testi-image2">
                <img src={nft.imageUrl} alt="" />
              </div> */}
            </div>
            <div className="col-lg-6 py-3 pr-lg-5">
              <h2 className="title-section">{nft.title}</h2>
              <div className="divider"></div>
              <p>{nft.description}</p>
              <div className="post-date">
                  <span className="icon">
                    <span className="mai-cash-outline"></span>
                  </span> <a>Price: {nft.price} ETH</a>
                </div>
               
              <a href="#" className="btn btn-primary border ml-1">Like</a>
              <a href="#" className="btn btn-primary border ml-1">Buy</a>
              <a href="#" className="btn btn-outline border ml-1">Edit</a>
              <a href="#" className="btn btn-outline border ml-1">Delete</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Details;