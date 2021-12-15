import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import * as nftService from '../../services/nftService';
import * as authService from '../../services/authService';

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

    const onClickDeleteHandler = (e) => {
      e.preventDefault();

      nftService.remove(nftId)
        .then(x => navigate('/explore'));
  };

    const ownerButtons = (
      <>
          <Link to={`/edit/${nft._id}`} className="btn btn-outline border ml-1">Edit</Link>
          <a href="#" className="btn btn-outline border ml-1" onClick={onClickDeleteHandler}>Delete</a>
      </>
  );

  const userButtons = (
    <>
         <a href="#" className="btn btn-primary border ml-1">Like</a>
          <a href="#" className="btn btn-primary border ml-1">Buy</a>
    </>
);


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
                  </span> <a><b>Price:</b> {nft.price} ETH</a>
                </div>
                {/* <div className="post-date">
                  <span className="icon">
                    <span className="mai-heart"></span>
                  </span> <a><b>Favourites:</b> {nft.favourites.length}</a>
                </div> */}
               
                {user._id && (user._id == nft.owner
                            ? ownerButtons
                            : userButtons
                )}

            
            </div>
          </div>
        </div>
      </div>
    );
}

export default Details;