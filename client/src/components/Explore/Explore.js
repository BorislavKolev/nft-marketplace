import { useState, useEffect } from 'react';
import NftCard from "./NftCard";

import * as nftService from '../../services/nftService';

const Explore = () => {
    const [nfts, setNfts] = useState([]);

    useEffect(() => {
        nftService.getAll()
            .then(result => {
                setNfts(result[0]);
                console.log('success')
                console.log(nfts);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return(
        <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        
        <section id="subheader" className="text-light" data-bgimage="url(https://res.cloudinary.com/sharwinchester/image/upload/v1639089507/subheader-dark_mpy7oc.jpg) top">
                <div className="center-y relative text-center">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-md-12 text-center">
                                <h1>Explore</h1>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
        </section>
        

        <section aria-label="section">
            <div className="container">
                <div className="row wow fadeIn">
                    <div className="col-lg-12">

                      
                    </div>                     
              
                    {nfts.length > 0
                    ? (
                        <>
                        {nfts.map(x => <NftCard key={x._id} nft={x} />)}
                        </>
                    ) 
                    : <p>No nfts in database!</p>
                    }
                  
                 
                    {/* <div className="col-md-12 text-center">
                        <a href="#" id="loadmore" className="btn-main wow fadeInUp lead">Load more</a>
                    </div>                                               */}
                </div>
            </div>
        </section>

    </div>
    );
}

export default Explore;