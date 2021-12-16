import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NftList from '../NftList';

import * as nftService from '../../services/nftService';

import './Home.css';

const Home = () => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    nftService.getLatest()
      .then(result => {
        setNfts(result[0]);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

    return (

     <div>
         
  
  <div className="back-to-top"></div>

 

  <main>
  <div className="page-banner home-banner">
          <div className="container h-100">
            <p></p>
            <div className="row align-items-center h-100">
              <div className="col-lg-6 py-3 wow fadeInUp">
                <h1 className="mb-4">Discover rare artworks by world class artists</h1>
                <p className="text-lg mb-5">NFT: Unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable</p>
    

                <Link to="/explore" className="btn btn-primary btn-split ml-2">Explore <div className="fab"><span className="mai-play"></span></div></Link>
              </div>
              <div className="col-lg-6 py-3 wow zoomIn">
                <div className="img-place">
                  <img src="https://lh3.googleusercontent.com/WEf44BSzOAqJ94D8b5svtE7wm-W3cGiLQFx3Nu9bModidOozoaUTnEOQkyzAEyKbq4lzlR-LeeSl6KBpLFmTOt4VTfibH2J2Oqq89w=w600" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
    <div className="page-section features">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div className="d-flex flex-row">
              <div className="img-fluid mr-3">
                <img src="/img/icon_pattern.svg" alt="" />
              </div>
              <div>
                <h5>Explore the NFT world</h5>
                <p>All the rare artworks...</p>
              </div>
            </div>
          </div>
  
          <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div className="d-flex flex-row">
              <div className="img-fluid mr-3">
                <img src="/img/icon_pattern.svg" alt="" />
              </div>
              <div>
                <h5>Sell your NFT's</h5>
                <p>On the Ethereum blockchain...</p>
              </div>
            </div>
          </div>
  
          <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
            <div className="d-flex flex-row">
              <div className="img-fluid mr-3">
                <img src="/img/icon_pattern.svg" alt="" />
              </div>
              <div>
                <h5>Collect other NFT's</h5>
                <p>Join the future...</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div> 
  
    <div className="page-section border-top">
      <div className="container">
        <div className="text-center wow fadeInUp">
          <h2 className="title-section">Latest NFT's for <span className="marked">sale</span></h2>
          <div className="divider mx-auto"></div>
        </div>
        <div className="row my-5 card-blog-row">
          <NftList nfts={nfts} />
        </div>
      </div>
    </div>
  </main>

 
     </div>
    );
}

export default Home;