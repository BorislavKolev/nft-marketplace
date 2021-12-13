import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as nftService from '../../services/nftService';


const Edit = () => {
    const navigate = useNavigate();
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

    const nftEditSubmitHandler = (e) => {
        e.preventDefault();

        let nftData = Object.fromEntries(new FormData(e.currentTarget))

        nftService.update(nft._id, nftData)
            .then(result => {
                navigate(`/details/${nft._id}`);
            })
    }

    return (
        <div className="page-section">
        <div className="container">
          <div className="row align-items-center">
         
            <div className="col-lg-6 py-3">
              <div className="subhead">Let the world see your work...</div>
              <h2 className="title-section">Edit NFT</h2>
              <div className="divider"></div>
              
              <form method="POST" onSubmit={nftEditSubmitHandler}>
                <h5>Title</h5>
                <div className="py-2">
                  <input type='text' name='title' id='title' className="form-control" defaultValue={nft.title}/>
                </div>
                <h5>Description</h5>
                <div className="py-2">
                  <textarea type='text' name='description' id='description' className="form-control" defaultValue={nft.description} />
                </div>
                <h5>Image Url</h5>
                <div className="py-2">
                  <textarea type='text' name='imageUrl' id='imageUrl' className="form-control" defaultValue={nft.imageUrl}/>
                </div>
                <h5>Price in ETH</h5>
                <div className="py-2">
                  <input type='number' name='price' id='price' className="form-control" min="0" step="any" defaultValue={nft.price}/>
                </div>
                <button type="submit" className="btn btn-primary rounded-pill mt-4">Edit</button>
              </form>
            </div>
          </div>
        </div> 
      </div> 
    );
}

export default Edit;