import { useState, useEffect } from 'react';
import NftCard from "./NftCard";

import * as nftService from '../../services/nftService';

const Explore = () => {
    const [nfts, setNfts] = useState([]);

    useEffect(() => {
        nftService.getAll()
            .then(result => {
                setNfts(result[0]);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return(
        <div className="page-section border-top">
        <p></p>
        <div className="container">
          <div className="text-center wow fadeInUp">
            <div className="subhead">Buy. Sell. Trade.</div>
            <h2 className="title-section">Explore our <span className="marked">Marketplace</span></h2>
            <div className="divider mx-auto"></div>
          </div>
          <div className="row my-5 card-blog-row">
          {nfts.length > 0
                     ? (
                         <>
                         {nfts.map(x => <NftCard key={x._id} nft={x} />)}
                         </>
                     ) 
                     : <p>No nfts in database!</p>
                     }
            
          </div>
        </div>
      </div> 
    )}

export default Explore;